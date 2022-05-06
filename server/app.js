const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const tasksRoute = require('./routes/tasks')
const mongoose = require('mongoose');

/* app.use('/route', (req,res,next) => {
    console.log("Independent Middleware");
    next;
}) */

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', tasksRoute)

app.get('/route', (req,res)=> {
    res.send("Works");

})

mongoose.connect('mongodb+srv://dasha:dasha123@cluster0.pegu0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (event) => {
    console.log("Connected to DB");
}).catch(e => console.log(e));

app.listen(4000);