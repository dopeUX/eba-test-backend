const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    salary:{type:Number, required:true},
    age:{type:Number, required:true},
    emailId:{type:String, required:true}
});

const employeeModel = mongoose.model('employee', employeeSchema);

module.exports = employeeModel;