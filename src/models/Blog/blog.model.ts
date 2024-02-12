// blog.model.ts

import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Blog extends Model<Blog> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    textBody: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    creationDateTime: Date;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: string;
}
