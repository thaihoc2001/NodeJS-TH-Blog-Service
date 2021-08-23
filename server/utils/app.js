const express = require("express");
const socketio = require('socket.io')
const app = express();

const onServerInitialized = server => {
    const io = socketio(server);

    io.on('connection', socket => {
        console.log('subscrie');
    });
};

module.exports = { onServerInitialized };