const Editor = require('../models/editor');
const Section = require('../models/section');

class SectionController {
    whereObj = {}; // for getter

    get allRecords() {
        return (async () => await Section.findAll())();
    }

    get records() {
        return (async () => {
            
        })()
    }

    constructor(){

    }
}

module.exports = new SectionController();