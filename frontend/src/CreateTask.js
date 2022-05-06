import React, {useState} from 'react';
import './App.css';

function CreateTask(props){
    const {onCreate} = props;

    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(task);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                <b>Task Name: </b>&nbsp;
                <input className='App-Input' name="title" type="text" placeholder="Add Task Name" value={task.title} onChange={(e) => handleChange(e)} />
            </label> <br />
            <label>
                <b>Task Description: </b>&nbsp;
                <input className='App-Input' name="description" type="text" placeholder="Add Task Description" value={task.description} onChange={(e) => handleChange(e)} />
            </label> &nbsp;
            <input className='App-Submit' type="submit" value="Submit" />
        </form>
    )
}

export default CreateTask;