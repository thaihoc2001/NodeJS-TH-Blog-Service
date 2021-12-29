const mongoose = require('mongoose')

var messenger = new mongoose.Schema({
    name: String,
    phone: String,
    contactContent: String,
    sendDate: Date
})
var confide = mongoose.model('Confide', messenger, 'confide')
module.exports = confide;
