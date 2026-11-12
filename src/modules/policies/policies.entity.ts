import { INSURANCE_TYPES } from './enums/insurance.enum.js';
import { User } from '../users/users.entity.js';
import { Car } from '../cars/cars.entity.js';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';


@Entity()
class Policy {
    @PrimaryGeneratedColumn({name: "id"})
    id: number;
    @Column({name: "type", nullable:false, type: "enum", enum: INSURANCE_TYPES})
    type: INSURANCE_TYPES;
    @ManyToOne((): typeof User => User, {nullable: false})
    holder: User;
    @ManyToOne((): typeof User => User, {nullable: false})
    agent: User;
    @ManyToMany(() => Car)
    @JoinTable({
        name: "pilicies_cars",
        joinColumn: {name: "policies_id", referencedColumnName: 'id'},
        inverseJoinColumn: {name: "cars_id", referencedColumnName: 'id'}
    })
    cars: Car[];
    @Column({name: "coverage_in_cent", nullable: false, unique: false})
    coverageInCent: number;
    @Column({name: "issued_at", nullable: false, unique: false})
    issuedAt: Date;
    @Column({name: "expires_at", nullable: false, unique: false})
    expiresAt: Date;
    @Column({name: "active", nullable: false, unique: false})
    active: boolean;
};

export { Policy };