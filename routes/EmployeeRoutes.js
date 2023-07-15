//const routes = require ('express-router');
const express = require('express');
const router = express.Router();


// Employee route
router.post('/employee/login', (req, res) => {
    res.send('login page');
});

router.post('/employee/leave/request', (req, res) => {
    res.send('request page');
});
router.get('/employee/leave/history', (req, res) => {
    res.send('history page');
});

router.put('/employee/profile', (req, res) => {
    res.send('profile page');
});

module.exports = router;

