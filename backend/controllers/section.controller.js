const Editor = require('../models/editor');
const Section = require('../models/section');

class SectionController {
    whereObj = {}; // for getter

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
        return (async () => await Section.findAll({ where: this.whereObj }) )();
    }

    constructor(){

    }
}

module.exports = new SectionController();