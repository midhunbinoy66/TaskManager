require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const reminderJob = require('./jobs/reminderJob');


const app = express();

app.use(express.json())
app.use('/tasks',taskRoutes);

reminderJob.start()

const PORT = process.env.PORT || 3000; 

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to database');
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))    
})
