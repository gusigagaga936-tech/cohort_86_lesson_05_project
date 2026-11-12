import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

import {Car}from './cars.entity.js'

@Module({
    imports: [TypeOrmModule.forFeature([Car])]
})
class CarsModule{}

export {CarsModule};

