const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
        title: {
                type: String,
                required: true, 
                unique: true ,
                uppercase: true,
                
            },
            budget: {
                type: Number, 
                trim: true, 
                required: true,
            },
            color: {
                type:String,
                trim: true,
                unique: true,
                required: true,
                minlength: 7,
                maxlength: 7
            }
        }, {collection: 'myBudget'})

module.exports = mongoose.model('myBudget', Schema)

