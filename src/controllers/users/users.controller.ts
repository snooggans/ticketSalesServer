import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "../../services/users/users.service";
import {User} from "../../shemas/user";
import {UserDto} from "../../dto/user-dto";
import {query} from "express";
import {Promise} from "mongoose";

@Controller('users')
export class UsersController {
	constructor(private userService: UsersService) {
	}

	@Get()
	getAllUsers(): Promise<User[]> {
		return this.userService.getAllUsers()
	}

	@Get(':id')
	getUserById(@Param('id') id): Promise<User> {
		return this.userService.getUserById(id)
	}

	@Post()
	sentUser(@Body() data: UserDto): Promise<User | boolean> {
		return this.userService.checkUserReg(data.login)
			.then(
				(qr) => {
					if (qr.length === 0) {
						return this.userService.sendUser(data)
					} else {
						console.log('err - user exists');
						throw new HttpException(
							{
								status: HttpStatus.CONFLICT,
								errorText: 'Пользователь уже зарегистрирован',
								detailText: 'Попробуйте другой логин'
							},
							HttpStatus.CONFLICT)
						// return Promise.reject();
					}
				}
			)
	}

	@Post(':login')
	authUser(@Body() data: UserDto, @Param('login') login): Promise<User | boolean> {
		return this.userService.checkUserAuth(data.login, data.psw)
			.then(
				(qr) => {
					if (qr.length != 0) {
						console.log('data', data)
						return Promise.resolve(true)
					} else {
						console.log('err - user exists');
						throw new HttpException(
							{
								status: HttpStatus.CONFLICT,
								errorText: 'Пользователь не найден',
								detailText: 'Проверьте логин и пароль'
							},
							HttpStatus.CONFLICT)
					}
				}
			)
	}

	@Delete()
	deleteAllUsers(): Promise<User> {
		return this.userService.deleteAllUsers()
	}

	@Delete(':id')
	deleteUserById(@Param('id') id): Promise<User> {
		return this.userService.deleteUserById(id)
	}

	@Put(':id')
	updateUser(@Param('id') id, @Body() data: UserDto):	Promise<User> {
		return this.userService.updateUser(id, data)
	}

}
