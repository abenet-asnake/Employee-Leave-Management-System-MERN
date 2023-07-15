//const routes = require ('express-router');
const express = require('express');
const router = express.Router();


// Employee route
router.post('/api/employee/login', (req, res) => {
    res.send('login page');
});

router.post('/api/employee/leave/request', (req, res) => {
    res.send('request page');
});
router.get('/api/employee/leave/history', (req, res) => {
    res.send('history page');
});

router.put('/api/employee/profile', (req, res) => {
    res.send('profile page');
});

module.exports = router;

