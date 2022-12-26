import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
	constructor(private usersService: UsersService) {
		super({ usernameField: "login", passwordField: "psw" });
	}

	async validate(login: string, psw: string): Promise<any> {
		const user = await this.usersService.checkAuthUser(login, psw);
		console.log(user);
		if (!user) {
			throw new HttpException({
				status: HttpStatus.CONFLICT,
				errorText: "пользователь не найден"
			}, HttpStatus.CONFLICT);
		}
		return true;
	}
}