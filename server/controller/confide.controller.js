const express = require('express');
const confideSchema = require('../model/confide.model');

module.exports.postConfide = async (req, res) => {
    try {
        const name = req.body.name;
        const message = req.body.message;
        const type = req.body.type;
        const sendDate = new Date();
        console.log(sendDate)
        const newConfide = new confideSchema({
            name: name,
            message: message,
            type: type,
            sendDate: sendDate
        })
        console.log(newConfide)
        const confide = await newConfide.save();
        if(!confide) throw Error('Fail')
        res.status(200).send('Send success')
    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports.getConfidePublic = async (req, res) => {
    try {
        const confidePublic = await confideSchema.find({type: 'public'})
        if(confidePublic) {
            res.status(200).json(confidePublic)
        }else{
            res.status(200).send('No data')
        }
    } catch (err) {
        return res.status(401).send(err)
    }
}

module.exports.getConfidePrivate = async (req, res) => {
    try {
        const confidePrivate = await confideSchema.find({type: 'private'})
        if(confidePrivate) {
            res.status(200).json(confidePrivate)
        }else{
            res.status(200).send('No data')
        }
    } catch (err) {
        return res.status(401).send(err)
    }
}