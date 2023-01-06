const Section = require('../models/section');
const SQL = require('./mysql.controller');

class SectionController {
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
        if (Number.isInteger(limit)) {
            this.limit = parseInt(limit);
        }
        
        return this;
    }

    setOffset({offset}){
        if (Number.isInteger(offset)) {
            this.offset = parseInt(offset);
        }

        return this;
    }

    async create({editor_id, description, code, category}){
        if( !editor_id || !description || !code || !category || Number.isNaN(parseInt(editor_id)) ) {
            console.error(`One of the values are missing`);
            return false;
        }

        const section = await Section.create({editor_id, description, code, category});
        return section;
    }

    async remove({id}){
        if (!id || Number.isNaN(parseInt(id))) {
            console.error(`ID to remove is missing`);
            return false;
        }

        const section = await Section.destroy({where: {id: parseInt(id)}});
        return `Removed ${section} records`;
    }


    async modify({id, columnName, newValue}){
        if (!id || !columnName || !newValue || Number.isNaN(parseInt(id))) {
            console.error(`One or more of the fields to modify are missing`);
            return false;
        }

        const recordToChange = await Section.update(
            { [columnName]:newValue },
            { where: {id}}
        );
            
        return `Updated ${recordToChange} records`;
    }

    get records() {
        return (async () => await Section.findAll({ where: this.whereObject, offset: this.offset, limit: this.limit, order: [this.order] }) )();
    }

    constructor(){

    }
}

module.exports = new SectionController();