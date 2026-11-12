import { User } from '../users/users.entity.js';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
class Car {
    @PrimaryGeneratedColumn({name: "id"})
    id: number;
    @Column({name: "brand", nullable: false, unique: false})
    brand: string;
    @Column({name: "model", nullable: false, unique: false})
    model: string;
    @Column({name: "year", nullable: false, unique: false})
    year: number;
    @Column({name: "vin", nullable: false, unique: true})
    vin: string;
    @Column({name: "color", nullable: false, unique: false})
    color: string;
    @ManyToOne((): typeof User => User, { nullable: false})
    owner: User;
    @Column({ default: true })
    active: boolean;
};

export { Car };