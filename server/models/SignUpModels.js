const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    password2:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model('reg', signUpTemplate)
