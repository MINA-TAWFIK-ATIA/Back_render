const mongoose = require('mongoose');
const deviceSchema = new mongoose.Schema({
    DeviceName:{
   type:String,
    // required:[true ,"You Have To Provide Valid Name"],
    // minlength:[3 , "name must not be less than 3 characters"],
    // maxlength:[30 , "name must not be more than 30 characters"],
    // match:[/^[A-Za-z]+$/ , "name must not be contain numbers or special characters" ],
    // unique:true 
} ,
Model:{
    type:String,
    // required:[true ,"You Have To Provide Valid Description"]
},
PowerConsumption:{
type:Number,
// default:0,
// min:[0,"price must not be less than 0 "],
// max:[50000,"price must not be exceed 10000"]
},

CreatedDate:{
    type:Date ,
    default:Date.now},

});



module.exports.devicemodel = mongoose.model('device' , deviceSchema);