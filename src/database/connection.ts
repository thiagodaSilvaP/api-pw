import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('db_pw', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()

export {sequelize}