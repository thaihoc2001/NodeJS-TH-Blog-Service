const express = require('express');
const authUserAdmin = require('../model/authUserAdmin.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.login = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const passwordHash = await bcrypt.hash(password,10);
        const user = await authUserAdmin.findOne({username}).lean();
        if(!user) {
            return res.status(401).json({message:"Username does not exist", success: false});
        }
        if(await bcrypt.compare(password,user.password)){
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
exports.register = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const fullname = req.body.fullname;
        const passwordHash = await bcrypt.hash(password,10);
        const newUser = new authUserAdmin({
            username: username,
            password: passwordHash,
            fullname: fullname
        })
        const auth = await newUser.save();
        if(!auth) throw Error('has a error when save the data');
        res.status(200).json({success: true});
    } catch (err){
        res.status(401).send(err)
    }
}
