const { DataTypes } = require('sequelize');
const { connection } = require('../controllers/mysql.controller');
const Editor = require('./editor');

const Section = connection.define('sections', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    editor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Editor,
            key: 'id'
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    code: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    category: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    // Remember, sequelize is adding createdAt and updatedAt!
})

module.exports = Section;