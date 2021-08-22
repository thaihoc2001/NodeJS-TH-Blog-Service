const mongoose = require('mongoose')

var confideSchema = new mongoose.Schema({
    name: String,
    message: String,
    type: String,
    sendDate: Date
})
var confide = mongoose.model('Confide', confideSchema, 'confide')
module.exports = confide;