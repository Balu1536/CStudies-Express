const express = require('express');
const app = express();
const port = 3000;

// Route for the homepage
app.get('/', (req, res) => {
res.send('Welcome to Greenfield Community Center!');
});

app.get('/contacts',(req,res)=>{
    res.json({
        email:"balu@gmail.com",
        phone:"+91 9878767XXXX"
    });
});

// Start the server
app.listen(port, () => {
console.log(`Community Center server running at http://localhost:${port}`);
});