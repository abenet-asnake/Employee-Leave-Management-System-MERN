const router = require ('./routes/EmployeeRoutes')
const routers=require ('./routes/HRRoutes');
const routes = require ('./routes/TKRoutes');

const express = require('express');
const app = express();

const PORT = 5000;

app.use(router);
app.use(routers);
app.use(routes);


app.listen(PORT, (req, res) => {
    console.log(`Server started on PORT: ${PORT}`);
});