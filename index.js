const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRoute = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use routes
app.use('/tasks', tasksRoute);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
