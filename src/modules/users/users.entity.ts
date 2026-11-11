// При использывании ORM систем (для взаемодействия с DB), тут будет класс, который напрямую отображается на таблицу в БД

// каждый экземпляр (обтект) представляет отдельную строку в таблицу в БД
import { ROLE } from './enums/role.enum.js';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


// @Entity - это специальный декораторб который превращает обычный TypeScript класс в модель таблицы базы данных
// С его помощью Type ORM понимает, что данный класс (в данном случае User) нужно связать
// со схемой бд (создать таблицу, читать из нее и записывать в нее данные)
@Entity()
class User {
    // название столбца в БД
    @PrimaryGeneratedColumn({name: "id"})
    id: number;
    // nullable - указывает могут ли быть созданны в определенном столбце значение в виде null
    // unique - опредиляет должно ли быть значение столбца уникальным или нет
    @Column({name: "email", nullable: false, unique: true})
    email: string;
    @Column({name: "passwort", nullable: false, unique: false})
    password: string;
    @Column({name: "name", nullable: false, unique: false})
    name: string;
    // enum - это массив возможных перечисленных значений
    // type - указываем явный тип для нашего столбца, в данном примере мы его использывали так как у нас использывается специфический тим enum
    @Column({name: "role", nullable: false, unique: false, type: "enum", enum: ROLE})
    role: ROLE;
    @Column({name: "active", nullable: false, unique: false})
    active: boolean;
};

export { User };