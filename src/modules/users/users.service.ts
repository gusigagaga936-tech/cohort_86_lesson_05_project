// service - файл в котором мы изолируем бизнес логику нашего модуля
import { Injectable } from '@nestjs/common';

import { UserRepository } from './users.repository.js';
import { User } from './users.entity.js';
import { ROLE } from './enums/role.enum.js'


@Injectable()
class UsersService {
    constructor(private readonly repository: UserRepository) {}

    async createUser(user: User): Promise<User> {
        user.role = ROLE.CLIENT;
        user.active = true;

        return await this.repository.save(user);
    }

    async getAllActiveUsers(): Promise<User[]> {
        return await this.repository.findAllActive()
    }

    async getActiveUserById(id: number): Promise<User | null>{
        const user = await this.repository.findById(id);
        if(!user || !user.active) {
            return null;
        }

        return user;
    }
    async updateUser (id: number, user: User): Promise<void> {
        const foundedUser: User | null = await this.getActiveUserById(id);

        if(foundedUser) {
            foundedUser.name = user.name;
            await this.repository.save(user);
        }
    }
        // на самом деле мы из БД пользывателя не удаляем мы просто меняем его статус active на false
    async deleteUserById (id: number): Promise<void> {
        const userForDelete: User | null = await this.getActiveUserById(id);

        if(userForDelete) {
            userForDelete.active = false;
            await this.repository.save(userForDelete);
        }
    }

    async restoreUserById (id: number): Promise<void> {
        const userForRestore: User | null = await this.getActiveUserById(id);
        if (userForRestore && !userForRestore.active) {
            userForRestore.active = true;
            await this.repository.save(userForRestore);
        }
    }
    async setRole(id: number, role: ROLE): Promise<void> {
    const user: User | null = await this.getActiveUserById(id);
    if (user) {
      user.role = role;
      await this.repository.save(user);
    }
  }
}
export { UsersService };