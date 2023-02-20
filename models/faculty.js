const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const MagicSchool = require('./magic_school');
const Faculty = sequelize.define('Faculty', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    animal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    element: {
        type: DataTypes.STRING,
        allowNull: false
    },
    magicSchool: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
Faculty.belongsTo(MagicSchool, { foreignKey: 'magicSchool' });

module.exports = Faculty;