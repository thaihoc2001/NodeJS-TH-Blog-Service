const express = require('express');
authUserAdminSchema = require('../model/authUserAdmin.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.login = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await authUserAdminSchema.findOne({username}).lean();
        if(password == user.password){
            console.log('oke')
            const token = jwt.sign({
                id: user._id,
                username: user.username
            }, process.env.JWT_SECRET)
            console.log(token)
            res.status(200).json({
                statusUpdate: user.statusUpdate,
                token: token,
                message: "Login success",
                success: true
            })
        }else{
            res.status(401).send('Login fail');
        }
    } catch (err){
        res.status(401).send(err)
    }
}