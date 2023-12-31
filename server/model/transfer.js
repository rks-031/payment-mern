// models/todoModel.js
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    senderId:{
        type:Number,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    initialAmount:{
        type: Number,
        required: true
    }
});

const login = mongoose.model('Login', loginSchema);

module.exports = login;
