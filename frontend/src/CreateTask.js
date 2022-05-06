import React, {useState} from 'react';

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
                Task Name:
                <input name="title" type="text" placeholder="Add Task Name" value={task.title} onChange={(e) => handleChange(e)} />
            </label>
            <label>
                Task Description:
                <input name="description" type="text" placeholder="Add Task Description" value={task.description} onChange={(e) => handleChange(e)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateTask;