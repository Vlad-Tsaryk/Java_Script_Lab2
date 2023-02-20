const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const Faculty = require("./faculty");
const Wizard = sequelize.define('Wizard', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    bloodStatus: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    faculty: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
Wizard.belongsTo(Faculty, { foreignKey: 'faculty' });

module.exports = Wizard;