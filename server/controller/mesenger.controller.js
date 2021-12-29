const express = require('express');
const messenger = require('../model/mesenger.model');

module.exports.sendMesenger = async (req, res) => {
    try {
        const name = req.body.name;
        const contactContent = req.body.contactContent;
        const phone = req.body.phone;
        const sendDate = req.body.sendDate;
        const newConfide = new messenger({
            name: name,
            phone: phone,
            contactContent: contactContent,
            sendDate: sendDate
        })
        console.log(newConfide);
        const confide = await newConfide.save();
        if(!confide) throw Error('Fail')
        res.status(200).json({message: "send success", success: true});
    } catch (err) {
        console.log(err)
        return res.status(400).send(err);
    }
}

module.exports.getMessenger = async (req, res) => {
    try {
        const confidePrivate = await messenger.find()
        if(confidePrivate) {
            res.status(200).json(confidePrivate)
        }else{
            res.status(200).send('No data')
        }
    } catch (err) {
        return res.status(401).send(err)
    }
}
