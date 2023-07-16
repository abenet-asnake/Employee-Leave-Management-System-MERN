const express=require('express');
const HRRoutes=express.Router();


// HR routers 
HRRoutes.post('/hr/employees/register', (req, res) => {
    res.send('emp register page');
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

routers.get('/hr/leave/policy', (req, res) => {
    res.send('put policy page');
});

HRRoutes.put('/hr/leave/policy', (req, res) => {
    res.send('policy update page');
});

HRRoutes.patch('/hr/leave/request', (req, res) => {
    res.send('leave patch page');
});

module.exports=HRRoutes;