const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const Faculty = require("./faculty");
const Ghost = sequelize.define('Ghost', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    born: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    died: {
        type: DataTypes.DATEONLY,
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
Ghost.belongsTo(Faculty, { foreignKey: 'faculty' });

module.exports = Ghost;