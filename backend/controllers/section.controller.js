const Editor = require('../models/editor');
const Section = require('../models/section');

class SectionController {
    // variables for getter
    whereObj = {}; 
    orderBy = ['id', 'asc'];
    limit = 5;
    skip = 0;

    setWhereObj( where ) {
        try{
            const parsedJSON = JSON.parse(where);
            this.whereObj = parsedJSON;
        }catch(err){
            console.log('Error with setting up the where object in section controller '+ err);
            this.whereObj = {};
        }

        return this;
    }

    get records() {
        return (async () => await Section.findAll({ where: this.whereObj, offset: this.offset, limit: this.limit, order: this.order }) )();
    }

    constructor(){

    }
}

module.exports = new SectionController();