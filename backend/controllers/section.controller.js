const Editor = require('../models/editor');
const Section = require('../models/section');

class SectionController {
    // variables for getter
    whereObj = {}; 
    order = ['id', 'ASC'];
    limit = 5;
    offset = 0;

    setWhere({where}){
        try{
            if (where) {
                this.whereObj = JSON.parse(where);
            } 
        }catch(err){
            console.log(`Error with setWhere: ${err}`);
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
        if (limit) {
            this.limit = parseInt(limit);
        }
        
        return this;
    }

    setOffset({offset}){
        if (offset) {
            this.offset = parseInt(offset);
        }

        return this;
    }

    async create({editor_id, description, code, category}){
        if( !editor_id || !description || !code || !category ) {
            console.error(`One of the values are missing`);
            return false;
        }

        const section = await Section.create({editor_id, description, code, category});
        return section;
    }

    async remove({id}){
        if( !id ) {
            console.error(`ID to remove is missing`);
            return false;
        }

        const section = await Section.destroy({where: {id: parseInt(id)}});
        return `Removed ${section} records`;
    }

    get records() {
        return (async () => await Section.findAll({ where: this.whereObj, offset: this.offset, limit: this.limit, order: [this.order] }) )();
    }

    constructor(){

    }
}

module.exports = new SectionController();