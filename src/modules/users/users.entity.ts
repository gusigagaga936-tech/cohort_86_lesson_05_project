// При использывании ORM систем (для взаемодействия с DB), тут будет класс, который напрямую отображается на таблицу в БД

// каждый экземпляр (обтект) представляет отдельную строку в таблицу в БД
import { ROLE } from './enums/role.enum.js';

class User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: ROLE;
    active: boolean;
};

export { User };