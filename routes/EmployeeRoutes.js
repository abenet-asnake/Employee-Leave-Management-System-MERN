//const routes = require ('express-router');
const express = require('express');
const EMPRoutes = express.Router();


// Employee route
EMPRoutes.post('/employee/login', (req, res) => {
    res.send('login page');
});

EMPRoutes.post('/employee/leave/request', (req, res) => {
    res.send('request page');
});
EMPRoutes.get('/employee/leave/history', (req, res) => {
    res.send('history page');
});

EMPRoutes.put('/employee/profile', (req, res) => {
    res.send('profile page');
});

module.exports = EMPRoutes;

