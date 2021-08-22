const mongoose = require('mongoose')
var publicConfideSchema = mongoose.Schema({
    name: String,
    message: String,
    sendDate: Date
})
var publicConfide = mongoose.models('PublicConfide', publicConfideSchema, 'publicConfide')
module.exports = publicConfide;