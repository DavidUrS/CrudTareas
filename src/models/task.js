module.exports = function (){
    var db = require('../libs/db-connection')();
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    var Task = Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return db.model('task',Task);
}