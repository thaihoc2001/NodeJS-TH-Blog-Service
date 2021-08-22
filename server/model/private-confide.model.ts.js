const mongoose = require('mongoose')
var privateConfideSchema = mongoose.Schema({
    name: String,
    message: String,
    sendDate: Date
})
var privateConfide = mongoose.models('PrivateConfide', privateConfideSchema, 'privateConfide')
module.exports = privateConfide;