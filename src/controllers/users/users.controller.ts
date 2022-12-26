import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import {UsersService} from "../../services/users/users.service";
import {User} from "../../shemas/user";
import {UserDto} from "../../dto/user-dto";
import {query} from "express";
import {Promise} from "mongoose";
import { AuthGuard } from "@nestjs/passport";

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
					}
				}
			)
	}

	@UseGuards(AuthGuard('local'))
	@Post(':login')
	authUser(@Body() data: UserDto, @Param('login') login): any {
		return this.userService.login(data)
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
