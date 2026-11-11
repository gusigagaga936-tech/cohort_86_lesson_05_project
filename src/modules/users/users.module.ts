import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users.entity.js'

@Module({
    imports: [TypeOrmModule.forFeature([User])],
})
class UserModule {}

export { UserModule };