const express=require('express');
const HRRoutes=express.Router();


// HR routers 
HRRoutes.post('/hr/employees/register', (req, res) => {
  // Mandatory Filed 
  const {empFullName,basic} = req.body;
  if (!empFullName || !basic) {
    throw new Error ('Please provide a Full Name   and basic Salary');
}
else {
    res.send(JSON.stringify(empFullName));
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