const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const askQuestion = (query)=>new Promise((resolve)=>rl.question(query,resolve))

async function addTask(){
    try {
        const title = await askQuestion('Enter Task Title');
        const description = await askQuestion('Enter description ');
        const dueDate = await askQuestion('Enter due data (YYYY-MM-DD');
        const recurring = (await askQuestion('Is this a recurring task? (y/n): ')).toLowerCase() === 'y';
    
        let recurringInterval = null;
        if (recurring) {
          recurringInterval = await askQuestion('Enter recurring interval (daily/weekly/monthly): ');
        }

        const task ={
            title,
            description,
            dueDate : new Date(dueDate),
            recurring,
            recurringInterval
        }

        const response  = await axios.post('http://localhost:3000/tasks',task);
        console.log('Task added successfully: ',response.data);
        
    } catch (error) {
        console.error('Error adding task:', error.message);
    }
}

addTask()