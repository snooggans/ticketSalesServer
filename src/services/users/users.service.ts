import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../shemas/user";
import {Model} from "mongoose";
import {UserDto} from "../../dto/user-dto";

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
	}

	async getAllUsers(): Promise<User[]> {
		return this.userModel.find()
    }

    async getUserById(id): Promise<User> {
		return this.userModel.findById(id);
	}

	async sendUser(data: UserDto): Promise<User> {
		const userData = new this.userModel(data);
        return userData.save()
	}

    async updateUser(id, data): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, data);
    }

    async deleteAllUsers(): Promise<User> {
		return this.userModel.remove()
	}

	async deleteUserById(id: string): Promise<User> {
		return this.userModel.findByIdAndRemove(id)
	}

	async checkUserAuth(login: string, psw: string): Promise<User[]>{
		return this.userModel.find({login: login, psw: psw})
	}

	async checkUserReg(login: string): Promise<User[]>{
		return this.userModel.find({login: login})
	}
}
