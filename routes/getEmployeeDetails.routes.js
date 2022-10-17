const {router} = require('../connection');
const employeeModel = require('../models/employee.model');

router.route('/get-employee-details').get(async(req, res)=>{
    const id = req.query.id;
    try{
       let result = await employeeModel.findOne({_id:id});
       res.json({status:true, result});
    }catch(err){
       res.json({status:false, error:err}); 
    }
});

module.exports = router;