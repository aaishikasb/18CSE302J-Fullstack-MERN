import React, {useState} from 'react';

function TableTask(props){
    const {tasks, onDelete, onUpdate} = props;

    return(
        <table>
            <tr>
                <td>Title</td>
                <td>Description</td>
            </tr>
            {
                tasks.map(task => {
                    return(
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <DescriptionForm task={task} onUpdate={onUpdate} />
                            <td><button onClick={() => onDelete(task._id)}>Delete</button></td>
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
                <input type="text" value={description} onChange={(event) => handleChange(event)} />
            </td>
            <td>
                <button onClick={onUpdate({_id: task._id, description: description})}>Update</button>
            </td>
        </div>
    )
}

export default TableTask