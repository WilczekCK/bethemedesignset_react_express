const { Sequelize } = require('sequelize');
const config = require('../config');

class Sql {
    sequelize = {};
    
    setConnection() {
        return new Sequelize(`mysql://${config.mysql.user}:${config.mysql.password}@${config.mysql.server}/${config.mysql.dbName}`)
    };

    get isConnected() {
        return (async () => {
            try{
                await this.sequelize.authenticate();
                console.log('Connection has been established');
                
                return true;
            } catch (error) {
                console.error('Unable to connect to the database:', error);
                
                return false;
            }
        })
    }

    constructor(){
        this.sequelize = this.setConnection();
    }
}

module.exports = new Sql();