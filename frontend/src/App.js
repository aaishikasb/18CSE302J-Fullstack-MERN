import React, {useEffect, useState} from 'react'
import './App.css';
import {getTasksAPI, addTaskAPI, updateTaskAPI, deleteTaskAPI} from './apis/tasks';
import TableTask from './TableTask';
import CreateTask from './CreateTask';
import Heading from './Heading';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasksAPI().then(tasks => setTasks(tasks));
  }, [])

  const addTask = (task) => {
    return addTaskAPI(task)
    .then(data => {
      setTasks([...tasks, data])
    })
  }

  const updateTask = (task) => {
    return updateTaskAPI(task)
    .then(data => {
      return data;
    })
  }

  const deleteTask = (id) => {
    return deleteTaskAPI(id)
    .then(data => {
      if(data.deletedCount === 1){
        setTasks(tasks.filter(task => task._id !== id));
      }
    })
  }

  return (
    <div className="App">
      <Heading />
      <CreateTask onCreate={addTask} />
      <TableTask className="App" tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
}

export default App;
