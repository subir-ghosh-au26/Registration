const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email:{
        type: String,
        require: true,
        unique: true
    },

    mobile:{
        type: Number,
        require: true
    },

    emobile:{
        type: Number,
        require: true
    },

    department:{
        type: String,
        require: true
    },

    designation:{
        type: String,
        require: true
    },

    doj:{
        type:Date,
        require:true
    },

    dob:{
        type: Date,
        require: true
    },

    salary:{
        type: Number,
        require: true
    },
    gpay:{
        type: Number,
        require: true
    },

    gender:{
        type: String,
        require: true
    },

    marital_status:{
        type: String,
        require: true
    },

    category: {
        type: String,
        require: true
    },

    office_add:{
        type: String,
        require: true
    },

    resi_add:{
        type: String,
        require: true
    },

    photo:{
        type:String,
        require:true
    },

    sign:{
        type:String,
        require:true
    }

});

module.exports = new mongoose.model('User', userSchema);