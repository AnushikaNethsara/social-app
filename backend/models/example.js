const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exSchema = new Schema({
    profileImg: {
        type: String
    }
}, {
    collection: 'ex'
})

module.exports = mongoose.model('Ex', exSchema)