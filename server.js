const EMPRoutes = require ('./routes/EmployeeRoutes')
const HRRoutes=require ('./routes/HRRoutes');
const TKRoutes = require ('./routes/TKRoutes');

const express = require('express');
const app = express();

const PORT = 5000;

app.use('/api',EMPRoutes);
app.use('/api',HRRoutes);
app.use('/api',TKRoutes);


app.listen(PORT, (req, res) => {
    console.log(`Server started on PORT: ${PORT}`);
});