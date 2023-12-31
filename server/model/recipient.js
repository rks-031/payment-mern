// models/todoModel.js
const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
    recipientId:{
        type:Number,
        required: true
    },
    recipientPhoneNumber:{
        type: Number,
        required: true
    },
    transferAmount:{
        type: Number,
        required: true
    }
});

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;
