const jwt = require('jsonwebtoken');
const authUserAdmin = require('../model/authUserAdmin.model');

module.exports.checkToken = async (req, res, next) => {
    console.log(req.headers['authorization']);
    const token = req.headers['authorization'].split(' ')[1];
    console.log(token);
    console.log('oke');
    if (token && typeof token == "string" && token.length > 20) {
        const user_jwt = jwt.verify(token, process.env.JWT_SECRET);
        const id = user_jwt.id;
        const listUser = await authUserAdmin.find();
        for (let user of listUser){
            if(user.id === user_jwt.id){
                next();
            }
        }
    }
}
