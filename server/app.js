const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const tasksRoute = require('./routes/tasks')

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
app.listen(4000);