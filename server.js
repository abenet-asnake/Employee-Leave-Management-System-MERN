const EMPRoutes = require ('./routes/EmployeeRoutes')
const HRRoutes=require ('./routes/HRRoutes');
const TKRoutes = require ('./routes/TKRoutes');
const bodyParser= require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());


app.use('/api',EMPRoutes);
app.use('/api',HRRoutes);
app.use('/api',TKRoutes);
// adding Two bodyparaser and express json
// installing body paraser for raw data and json from post man testing server
// npm install body-parser




app.listen(PORT, (req, res) => {
    console.log(`Server started on PORT: ${PORT}`);
});