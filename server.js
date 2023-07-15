const router = require ('./routes/EmployeeRoutes')
const routers=require ('./routes/HRRoutes');
const routes = require ('./routes/TKRoutes');

const express = require('express');
const app = express();

const PORT = 5000;

app.use(router);
app.use(routers);
app.use(routes);
/*
//Employee routes
app.post('/api/employee/login', (req, res) => {
    res.send('login page');
});

app.post('/api/employee/leave/request', (req, res) => {
    res.send('request page');
});

app.get('/api/employee/leave/history', (req, res) => {
    res.send('history page');
});

app.put('/api/employee/profile', (req, res) => {
    res.send('profile page');
});

//HR routes

app.post('/api/hr/employees/register', (req, res) => {
    res.send('emp register page');
});

app.get('/api/hr/employees/:id', (req, res) => {
    res.send('view emp page');
});

app.put('/api/hr/employees/register/:id', (req, res) => {
    res.send('edit emp page');
});

app.delete('/api/hr/register/:id', (req, res) => {
    res.send('del emp page');
});

app.post('/api/hr/leave/policy', (req, res) => {
    res.send('create policy page');
});

app.get('/api/hr/leave/policy', (req, res) => {
    res.send('put policy page');
});

app.put('/api/hr/leave/policy', (req, res) => {
    res.send('policy update page');
});

app.patch('/api/hr/leave/request', (req, res) => {
    res.send('leave patch page');
});

//Time keeper routes
app.put('api/tk/employees', (req, res) => {
    res.send('Timekeeper page');
});

*/
app.listen(PORT, (req, res) => {
    console.log(`Server started on PORT: ${PORT}`);
});