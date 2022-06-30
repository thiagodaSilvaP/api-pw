"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('d3jsu98hcogv7n', 'lnrtoejavhdzls', '4f416090413f4434bcd89baaaa3759e17310732c1fea2840627d8f848c91a7e3', {
    host: 'ec2-44-206-89-185.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // This line will fix new error
        }
    },
});
exports.sequelize = sequelize;
sequelize.authenticate();
