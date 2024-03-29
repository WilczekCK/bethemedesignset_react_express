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
            if ( typeof where === 'object' ) {
                where = JSON.stringify(where);
            }

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
        if (!Number.isNaN(parseInt(limit))) {
            this.limit = parseInt(limit);
        }
        
        return this;
    }

    setOffset({offset}){
        if (!Number.isNaN(parseInt(offset))) {
            this.offset = parseInt(offset);
        }

        return this;
    }

    async create({editor_id, description, code, category}){
        let response = { status:200, content: 'ok' };

        if( !editor_id || !description || !code || !category || Number.isNaN(parseInt(editor_id)) ) {
            response.content = 'One of the values are missing';
            response.status = 400;

            console.error(response.content);
            return response;
        }

        response.content = await Section.create({editor_id, description, code, category});
        return response;
    }

    async remove({id}){
        let response = { status:200, content: 'ok' };

        if (!id || Number.isNaN(parseInt(id))) {
            response.content = 'ID to remove is missing';
            response.status = 400;
            
            console.error(response.content);
            return response;
        }

        const recordsRemovedAmount = await Section.destroy({where: {id: parseInt(id)}});
        response.content = `Removed ${recordsRemovedAmount} records`;
        return response;
    }


    async modify({id, columnName, newValue}){
        let response = { status:200, content: 'ok' };

        if (!id || !columnName || !newValue || Number.isNaN(parseInt(id))) {
            response.content = 'One or more of the fields to modify are missing or not correct';
            response.status = 400;

            console.error(response.content);
            return response;
        }

        const recordsModifiedAmount = await Section.update(
            { [columnName]:newValue },
            { where: {id}}
        );
            
        response.content = `Updated ${recordsModifiedAmount} records`
        return response;
    }

    get records() {
        return (async () => await Section.findAll({ where: this.whereObject, offset: this.offset, limit: this.limit, order: [this.order] }) )();
    }

    constructor(){

    }
}

module.exports = new SectionController();