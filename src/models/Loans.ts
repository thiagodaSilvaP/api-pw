import { DataTypes, InferAttributes, InferCreationAttributes, Model, ModelCtor } from 'sequelize';
import {sequelize} from '../database/connection';

interface ILoans extends Model<InferAttributes<ILoans>, InferCreationAttributes<ILoans>> {
    id: number;
    student: string;
    book: string;
    deliveryDate: Date
}

class Loans {
    declare loans: ModelCtor<ILoans>

    constructor() {
        this.init()
    }

    init() {
        this.loans = sequelize.define<ILoans>('Loan', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            student: {
                type: DataTypes.STRING,
                allowNull: false
            },
            book: {
                type: DataTypes.STRING,
                allowNull: false
            },
            deliveryDate: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
        
        })

        sequelize.sync()
    }
}

export {Loans, ILoans}