const {Sequelize} = require("sequelize");
const sequelize = new Sequelize('test', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});
module.exports = sequelize;