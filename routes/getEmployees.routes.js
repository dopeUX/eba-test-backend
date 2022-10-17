const e = require('express');
const mongoose = require('mongoose');
const {router} = require('../connection');
const employeeModel = require('../models/employee.model');

router.route('/get-employees').get(async(req, res)=>{
    try{
     const response = await employeeModel.find(); 
     res.json({status:true, response});
    }catch(err){
      res.json({status:false, error:err})  
    }
    
});

module.exports = router;