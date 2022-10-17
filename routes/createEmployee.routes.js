const {router} = require('../connection');
const employeeModel = require('../models/employee.model');

router.route('/create-employee').post(async(req, res)=>{
    // console.log('called after middleware');
   try{
     const employee = await employeeModel.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        salary:req.body.salary,
        age:req.body.age,
        emailId:req.body.emailId
     });
     res.json({status:'user added', employee});
   }catch(err){
    res.json({status:"couldn't create user", err});
   } 
});

module.exports = router;