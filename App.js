import React from 'react';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <div className="App">
                <TaskList />
            </div>
        </div>
    );
}

export default App;
