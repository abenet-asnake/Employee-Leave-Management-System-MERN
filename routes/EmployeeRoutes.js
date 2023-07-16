//const routes = require ('express-router');
const express = require('express');
const EMORoutes = express.Router();


// Employee route
EMORoutes.post('/employee/login', (req, res) => {
    res.send('login page');
});

EMORoutes.post('/employee/leave/request', (req, res) => {
    res.send('request page');
});
EMORoutes.get('/employee/leave/history', (req, res) => {
    res.send('history page');
});

EMORoutes.put('/employee/profile', (req, res) => {
    res.send('profile page');
});

module.exports = EMORoutes;

