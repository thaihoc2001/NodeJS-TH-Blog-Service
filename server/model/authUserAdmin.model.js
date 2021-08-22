const mongoose = require('mongoose')
var authUserAdminSchema = mongoose.Schema({
    username: String,
    password: String
})
var authUserAdmin = mongoose.models('AuthUserAdmin', authUserAdminSchema, 'authUserAdmin')
module.exports = authUserAdmin;