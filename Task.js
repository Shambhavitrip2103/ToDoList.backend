import React from 'react';

const Task = ({ task, onDelete, onUpdate }) => {
    return (
        <div className="task">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onUpdate(task._id, { ...task, completed: !task.completed })}
            />
            <input
                type="text"
                value={task.title}
                onChange={(e) => onUpdate(task._id, { ...task, title: e.target.value })}
            />
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
    );
};

export default Task;
