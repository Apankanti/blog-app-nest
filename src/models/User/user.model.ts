// user.model.ts

import { Table, Column, Model, DataType, Unique } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Unique
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @Unique
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;
}
