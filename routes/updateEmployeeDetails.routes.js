const {router} = require('../connection');
const employeeModel = require('../models/employee.model');

router.route('/update-employee').put(async(req, res)=>{
   try{
    let result = await employeeModel.findByIdAndUpdate(req.body.id,{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        salary:req.body.salary,
        age:req.body.age,
        email:req.body.email
    })
      res.json({status:true, result});
   }catch(err){
      res.json({status:false, error:err});
   }
});

module.exports = router;