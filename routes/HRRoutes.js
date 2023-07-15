const express=require('express');
const routers=express.Router();
module.exports=routers;

// HR routers 
routers.post('/hr/employees/register', (req, res) => {
    res.send('emp register page');
});

routers.get('/hr/employees/:id', (req, res) => {
    res.send('view emp page');
});

routers.put('/hr/employees/register/:id', (req, res) => {
    res.send('edit emp page');
});

routers.delete('/hr/register/:id', (req, res) => {
    res.send('del emp page');
});

routers.post('/hr/leave/policy', (req, res) => {
    res.send('create policy page');
});

routers.get('/hr/leave/policy', (req, res) => {
    res.send('put policy page');
});

routers.put('/hr/leave/policy', (req, res) => {
    res.send('policy update page');
});

routers.patch('/hr/leave/request', (req, res) => {
    res.send('leave patch page');
});