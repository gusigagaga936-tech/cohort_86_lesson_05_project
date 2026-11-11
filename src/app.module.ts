import { Module } from '@nestjs/common';

import { CarsModule } from './modules/cars/cars.module.js';
import { PoliciesModule} from './modules/policies/policies.module.js';
import { UserModule } from './modules/users/users.module.js';

@Module({
  imports: [CarsModule, PoliciesModule, UserModule],
})
export class AppModule {}
