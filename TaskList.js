import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/tasks').then((response) => setTasks(response.data));
    }, []);

    const addTask = () => {
        axios.post('http://localhost:5000/tasks', { title: newTask }).then((response) => {
            setTasks([...tasks, response.data]);
            setNewTask('');
        });
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
            setTasks(tasks.filter((task) => task._id !== id));
        });
    };

    const updateTask = (id, updatedTask) => {
        axios.put(`http://localhost:5000/tasks/${id}`, updatedTask).then((response) => {
            setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
        });
    };

    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <div className="task-list">
                {tasks.map((task) => (
                    <Task key={task._id} task={task} onDelete={deleteTask} onUpdate={updateTask} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
