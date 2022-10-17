const {router} = require('../connection');
const employeeModel = require('../models/employee.model');

router.route('/delete-employee').delete(async(req,res)=>{
    try{
      const result = await employeeModel.findByIdAndDelete(req.body.id);
      res.json({status:true, result});
    }catch(err){
      res.json({status:false, error:err});
    }
});

module.exports = router;