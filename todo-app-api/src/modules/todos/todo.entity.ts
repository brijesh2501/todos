import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Todo extends Model<Todo> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    dueDate: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    priority: string;
}