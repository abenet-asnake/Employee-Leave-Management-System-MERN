const express=require('express');
const HRRoutes=express.Router();


// HR routers 
HRRoutes.post('/hr/employees/register', (req, res) => {
  // Mandatory Filed 
  const {empFullName,address,dob,phone,job_tittle,dep,basic} = req.body;
  if (!empFullName || !basic || !dob || !phone || !job_tittle || !dep || !address ) {
    throw new Error ('Please provide a all Filed information');
}
else {
    res.send(JSON.stringify(basic));
    console.log(req.body.empFullName);
}
});

HRRoutes.get('/hr/employees/:id', (req, res) => {
    res.send('view emp page');
});

HRRoutes.put('/hr/employees/register/:id', (req, res) => {
    res.send('edit emp page');
});

HRRoutes.delete('/hr/register/:id', (req, res) => {
    res.send('del emp page');
});

HRRoutes.post('/hr/leave/policy', (req, res) => {
    res.send('create policy page');
});

HRRoutes.get('/hr/leave/policy', (req, res) => {
    res.send('put policy page');
});

HRRoutes.put('/hr/leave/policy', (req, res) => {
    res.send('policy update page');
});

HRRoutes.patch('/hr/leave/request', (req, res) => {
    res.send('leave patch page');
});

module.exports=HRRoutes;