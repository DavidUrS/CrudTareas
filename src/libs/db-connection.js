const mongoose = require('mongoose');
let db;

module.exports = function Connection(){
    if(!db){
        db = mongoose.connect('mongodb://localhost/crudtareas',{
            useMongoClient: true
        })
    }
    return db;
}