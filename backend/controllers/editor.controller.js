const Editor = require('../models/editor');
const SQL = require('./mysql.controller');

class EditorController {
    // variables for getter
    whereObject = {}; 
    order = ['id', 'ASC'];
    limit = 5;
    offset = 0;

    setWhere({where}){
        try{
            if (where) {
                let parsedJSON = JSON.parse(where);
                let whereObjectPrepared = SQL
                    .setWhereObjectToPrepare(parsedJSON) // GET is always querystring, sequelize requires own 'type'
                    .whereObjectPrepared // getter

                this.whereObject = whereObjectPrepared;
            } 
        }catch(err){
            console.error(`Error with setWhere: ${err}`);
            this.whereObj = {};
        }
        
        return this;
    }

    setOrder({order}){
        try{
            if (order) {
                this.order = (order).split(',');

                // Double protection!
                if (this.order[1] !== 'DESC' && this.order[1] !== 'ASC') {
                    throw(`Unknown order type, ${this.order[1]} given, restored to DESC`);
                }
            } 
        }catch(err){
            console.error(`Error with setOrder: ${err}`);
            this.order = ['id', 'DESC'];
        }

        return this;
    }

    setLimit({limit}){
        if (limit && parseInt(limit) !== NaN) {
            this.limit = parseInt(limit);
        }
        
        return this;
    }

    setOffset({offset}){
        if (offset && parseInt(offset) !== NaN) {
            this.offset = parseInt(offset);
        }

        return this;
    }

    async create({name, company_name}){
        if( !name || !company_name ) {
            console.error(`One of the values are missing`);
            return false;
        }

        const newEditor = await Editor.create({name, company_name});
        return newEditor;
    }

    async remove({id}){
        if (!id && parseInt(id) !== NaN) {
            console.error(`ID to remove is missing`);
            return false;
        }

        const editor = await Editor.destroy({where: {id: parseInt(id)}});
        return `Removed ${editor} records`;
    }


    async modify({id, columnName, newValue}){
        if (!id || !columnName || !newValue) {
            console.error(`One or more of the fields to modify are missing`);
            return false;
        }

        const recordToChange = await Editor.update(
            { [columnName]:newValue },
            { where: {id}}
        );
            
        return `Updated ${recordToChange} records`;
    }

    get records() {
        return (async () => await Editor.findAll({ where: this.whereObject, offset: this.offset, limit: this.limit, order: [this.order] }) )();
    }

    constructor(){

    }
}

module.exports = new EditorController();