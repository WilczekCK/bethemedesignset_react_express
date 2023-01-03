const { DataTypes } = require('sequelize');
const { connection } = require('../controllers/mysql.controller');

const Editor = connection.define('editors', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    company_name: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    // Remember, sequelize is adding createdAt and updatedAt!
})

module.exports = Editor;