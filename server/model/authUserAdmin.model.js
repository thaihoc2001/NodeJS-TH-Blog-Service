const mongoose = require('mongoose')

var authUserAdminSchema = new mongoose.Schema({
    username: String,
    password: String
})
var authUserAdmin = mongoose.model('AuthUserAdmin', authUserAdminSchema, 'authUserAdmin')
module.exports = authUserAdmin;