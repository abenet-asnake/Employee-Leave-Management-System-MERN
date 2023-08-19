const express=require('express');
const HRRoutes=express.Router();


// HR routers 
HRRoutes.post('/hr/employees/register', (req, res) => {
  // Mandatory Filed 
  //const {empFullName,address,dob,phone,job_tittle,dep,basic} = req.body;
  const {empFullName,basic,dob,phone,job_tittle,dep,address} = req.body;
  if (!empFullName || !basic|| !dob || !phone || !job_tittle || !dep || !address  ) {
    throw new Error ('Please provide a all Filed information');
}
else {
    res.send(JSON.stringify(empFullName + ' ' + basic));
    console.log(req.body.empFullName + ' ' + req.body.basic);
}
});

// testing with postman 
// data stored in memory for test purposes only in postman tools
const employeesData = [
    {
      id: 1,
      empFullName: 'Abenet Asnake ',
      address: 'Addis Ababa Summit',
      dob: '1994-06-15',
      phone: '0910089001',
      job_tittle: 'Computer Engineer',
      dep: 'Engineering',
      basic: 60000,
    },

  ];
  // search employee by ID 
HRRoutes.get('/hr/employees/:id', (req, res) => {
    //res.send('view emp page');
    const employeeId = parseInt(req.params.id);
    const employee = employeesData.find((emp) => emp.id === employeeId);
    //res.send(employee);
    if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
  } else {
    res.status(200).json(employee);
    }

});
// Edit employee status while hr register the employee status to update the status
HRRoutes.put('/hr/employees/register/:id', (req, res) => {
   // res.send('edit emp page');
   const employeeId = parseInt(req.params.id);
   const employeeIndex = employeesData.findIndex((emp) => emp.id === employeeId);
   if (employeeIndex === -1) {
    res.status(404).json({ error: 'Employee not found' });
  } else {
    // Update the employee data with the new information
    employeesData[employeeIndex] = {
        empFullName: 'Abenet Asnake ',
        address: 'Addis Ababa Summit',
        dob: '1994-06-15',
        phone: '0910089001',
        job_tittle: 'Computer Engineer',
        dep: 'Engineering',
        basic:100000,
    };

    res.status(200).json({ message: 'Employee information updated successfully', data: employeesData[employeeIndex] });
  }
      
      
});
// employee delete from the database
HRRoutes.delete('/hr/register/:id', (req, res) => {
    //res.send('del emp page');
   const employeeId=parseInt(req.params.id);
   const employeeIndex = employeesData.findIndex((emp) => emp.id === employeeId);
   if (employeeIndex === -1) {
    res.status(404).json({ error: 'Employee not found' });
  } else {
    employeesData.splice(employeeIndex, 1);
    res.status(200).json({ message: 'Employee deleted successfully', data: employeesData });
  }
});

HRRoutes.post('/hr/leave/policy', (req, res) => {
    //res.send('create policy page');
    
});

HRRoutes.get('/hr/leave/policy', (req, res) => {
    res.send('put policy page');
});

HRRoutes.put('/hr/leave/policy', (req, res) => {
    res.send('policy update page');
});

HRRoutes.patch('/hr/leave/request', (req, res) => {
    res.send('leave patch page');
});

module.exports=HRRoutes;