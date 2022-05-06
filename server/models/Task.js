const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
    }
});

module.exports = mongoose.model('tasks', TaskSchema);