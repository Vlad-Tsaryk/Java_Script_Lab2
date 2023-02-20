const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const MagicSchool = sequelize.define('MagicSchool', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    founded: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING
    }
});
module.exports = MagicSchool;