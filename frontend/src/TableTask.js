import React, {useState} from 'react';
import './App.css';

function TableTask(props){
    const {tasks, onDelete, onUpdate} = props;

    return(
        <table className='App-Table'>
            <tr>
                <td><b>Title</b></td>
                <td><b>Description</b></td>
                <td><b>Action Items</b></td>
            </tr>
            {
                tasks.map(task => {
                    return(
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <DescriptionForm task={task} onUpdate={onUpdate} />
                            <td><button className='App-Submit' onClick={() => onDelete(task._id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    )
}

function DescriptionForm(props){
    const {task, onUpdate} = props;

    const [description, setDescription] = useState(task.description);

    const handleChange = (event) => {
        setDescription(event.target.value);
    }

    return(
        <div>
            <td>
                <input className='App-Input' type="text" value={description} onChange={(event) => handleChange(event)} />
            </td>
            <td>
                <button className='App-Submit' onClick={onUpdate({_id: task._id, description: description})}>Update</button>
            </td>
        </div>
    )
}

export default TableTask