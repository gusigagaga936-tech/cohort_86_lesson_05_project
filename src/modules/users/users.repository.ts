// Repository - это файл в котором мы изолируем работу с БД от бизнес логики приложения
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from './users.entity.js';

// Injectable - это декоратор, он указывает что класс является провайдером. Этот декоратор разрешает NestJS автоматически создавать
// экземплярэтого класса и внедрять (передавать) его в другие классы (например сервесы в контроллеры) через конструктор

@Injectable()
class UserRepository{
    constructor(
        @InjectRepository(User)
private readonly repository: Repository<User> 
    ) {} 
// сохранить пользывателя в таблице БД
    async save(user: User): Promise<User> {
        return this.repository.save(user)
    }
// найти всех пользывателей из таблицы БД, которые active: true
    async findAllActive(): Promise<User[]> {
        return this.repository.findBy({active: true})
    }

    // найти юзера по ID
    async findById(id: number): Promise<User | null> {
        return this.repository.findOneBy({id})
    }

    // удалить юзера по ID
    async deleteById(id: number): Promise<void> {
        await this.repository.delete(id)
    }
};


export { UserRepository };