import React, {useState} from 'react';

function TableTask(props){
    const {tasks} = props;

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
                            <td>{task.description}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}

export default TableTask