const express=require('express');
const TKRoutes=express.Router();


// Time Keeper routes
TKRoutes.put('/tk/employees', (req, res) => {
    res.send('Timekeeper page');
});

module.exports = TKRoutes;