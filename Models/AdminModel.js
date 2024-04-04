const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    userName : {
        type : String 
    },
    password :  {
        type : String
    }
},{
    timestamps : true 
});

const adminModel = mongoose.model('admin',adminSchema);

module.exports = adminModel ;