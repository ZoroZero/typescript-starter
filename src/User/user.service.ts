
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreatePostDto } from './create-user-post.dto'

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.query(`SELECT * FROM "User"`);
    }


    async getUser(_id: string): Promise<User[]>{
        return await this.usersRepository.query(`SELECT * FROM "User" WHERE "Id" = '${_id.toString()}'`);
    }

    async createUser(_user: CreatePostDto): Promise<User[]>{
        return await this.usersRepository.query(`SELECT * FROM "User" WHERE "Id" = '${_user.id}'`);
    }

    // async getUser(_id: number): Promise<User[]> {
    //     return await this.usersRepository.find({
    //         select: ["fullName", "birthday", "isActive"],
    //         where: [{ "id": _id }]
    //     });
    // }

    // async updateUser(user: User) {
    //     this.usersRepository.save(user)
    // }

    // async deleteUser(user: User) {
    //     this.usersRepository.delete(user);
    // }
}
