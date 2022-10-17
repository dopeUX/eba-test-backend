const mongoose = require('mongoose');
const employeeModel = require('../models/employee.model');
const {router} = require('../connection');

router.route('/get-employee-by-search').get(async(req, res)=>{
   try{
     const title = (req.query.searchQuery).toLowerCase();
     const result = await employeeModel.find({$or:[{firstName: { $regex: title, $options: "i" }},{lastName:{ $regex: title, $options: "i" }}]});
     res.json({employees:result});
   } catch(err){
     res.json({status:false, error:err});
   }
});

module.exports = router;