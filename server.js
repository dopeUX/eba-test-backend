const {app, router} =  require('./connection');

const createEmployee = require('./routes/createEmployee.routes');
const getEmployees = require('./routes/getEmployees.routes');
const getEmployeesBySearch = require('./routes/getEmployeeBySearch.routes');
const deleteEmployee = require('./routes/deleteEmployee.routes');
const getEmployeeDetails = require('./routes/getEmployeeDetails.routes');
const updateEmployeeDetails = require('./routes/updateEmployeeDetails.routes');

// function printF(req, res, next) {
//     console.log('hello ');
//     next();
// }

//test api -----------
router.route('/').get(async(req, res)=>{
   res.send('hello')
});
/////////

router.use('/api', getEmployeeDetails);
router.use('/api', createEmployee);
router.use('/api', getEmployees);
router.use('/api', getEmployeesBySearch);
router.use('/api', deleteEmployee);
router.use('/api', updateEmployeeDetails);


app.use(router);