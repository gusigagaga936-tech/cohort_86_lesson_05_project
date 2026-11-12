import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

import { PolicyRepositiry } from './policies.repository.js'

@Module({
    imports: [TypeOrmModule.forFeature([PolicyRepositiry])]
})
class PoliciesModule {}

export { PoliciesModule };