"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loans = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
class Loans {
    constructor() {
        this.init();
    }
    init() {
        this.loans = connection_1.sequelize.define('Loan', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            student: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            book: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            deliveryDate: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            situation: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            }
        }, {});
        connection_1.sequelize.sync();
    }
}
exports.Loans = Loans;
