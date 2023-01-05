const { Sequelize, Op } = require('sequelize');
const config = require('../config');

class SQL {
    connection = {};
    objectToConvert = {}; // used for converting
    
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

    setWhereObjectToPrepare( objectToConvert ){
        this.objectToConvert = objectToConvert;
        return this;
    }

    get whereObjectPrepared() {
        let readyObject = this.objectToConvert;

        try{
            const objectWithOperators = Object.values(this.objectToConvert)[0];
            const objectKey = Object.keys(this.objectToConvert)[0];
            const lessThan = objectWithOperators['less_than'];
            const greaterThan =  objectWithOperators['greater_than'];

            if (lessThan) {
                delete readyObject[objectKey]['less_than'];

                readyObject[objectKey] = {
                    ...readyObject[objectKey],
                    [Op.lt]: lessThan
                }
            }

            if (greaterThan) {
                delete readyObject[objectKey]['greater_than'];

                readyObject[objectKey] = {
                    ...readyObject[objectKey],
                    [Op.gt]: greaterThan
                }
            }

        } catch(err) {
            console.error(`Error with getter whereObjectPrepared: ${err}`);
            readyObject = {};
        } 

        return readyObject;
    }

    constructor(){
        this.connection = this.setConnection();
    }
}

module.exports = new SQL();