import { INSURANCE_TYPES } from './enums/insurance.enum.js';
import { User } from '../users/users.entity.js';
import { Car } from '../cars/cars.entity.js';

class Policy {
    id: number;
    type: INSURANCE_TYPES;
    holder: User;
    cars: Car[];
    coverageInCent: number;
    issuedAt: Date;
    expiresAt: Date;
    active: boolean;
};

export { Policy };