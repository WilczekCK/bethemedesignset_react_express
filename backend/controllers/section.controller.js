const Editor = require('../models/editor');
const Section = require('../models/section');

class SectionController {
    whereObj = {}; // for getter

    setWhereObj( where ) {
        this.whereObj = where;
        return this;
    }

    get allRecords() {
        return (async () => await Section.findAll())();
    }

    get records() {
        return (async () => await Section.findOne({ where }))();
    }

    constructor(){

    }
}

module.exports = new SectionController();