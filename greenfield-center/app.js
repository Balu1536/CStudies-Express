const express = require('express');
const app = express();
const port = 3000;

// Route for the homepage for 1,2 case studies
// app.get('/', (req, res) => {
// res.send('Welcome to Greenfield Community Center!');
// });
app.use(express.json());

// //case study1. routes to classes and contacts
// const classesRouter = require('./routes/classes');
// const contactRouter =require('./routes/contacts');
// app.use('/classes', classesRouter);
// app.use('/contacts',contactRouter);


// //case study2. routes to events and contacts
// //const contactRouter = require('./routes/contacts');
// const eventsRouter = require('./routes/events');
// //app.use('/contacts',contactRouter);
// app.use('/events', eventsRouter);
// app.use('/public/logo.png',express.static('public/logo.png'));


//case study3.
const productsRouter = require("./routes/products");
app.use("/products", productsRouter);
app.get("/", (req, res) => {
  res.send("Neighborhood Food Store API");
});


// Start the server

app.listen(port, () => {
console.log(`Community Center server running at http://localhost:${port}`);
});