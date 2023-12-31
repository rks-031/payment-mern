// models/todoModel.js
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    transferId:{
        type:Number,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    leftAmount:{
        type: Number,
        required: true
    }
});

const history = mongoose.model('History', historySchema);

module.exports = history;
