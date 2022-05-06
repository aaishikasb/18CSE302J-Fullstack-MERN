export function getTasksAPI() {
    return fetch('http://localhost:4000/tasks')
    .then(res => res.json())
    .then(data => data)
}

export function addTaskAPI(task) {
    return fetch('http://localhost:4000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(data => data);
}

export function updateTaskAPI(task) {
    return fetch(`http://localhost:4000/tasks/${task._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(data => data);
}

export function deleteTaskAPI(id) {
    return fetch(`http://localhost:4000/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data);
}