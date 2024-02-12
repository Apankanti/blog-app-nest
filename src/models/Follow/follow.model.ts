// follow.model.ts

import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from '../User/user.model';

@Table
export class Follow extends Model<Follow> {
    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    })
    followerUserId: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    })
    followingUserId: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    creationDateTime: Date;
}
