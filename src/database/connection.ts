import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('d3jsu98hcogv7n', 'lnrtoejavhdzls', '4f416090413f4434bcd89baaaa3759e17310732c1fea2840627d8f848c91a7e3', {
    host: 'ec2-44-206-89-185.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
      },
})

sequelize.authenticate()

export {sequelize}