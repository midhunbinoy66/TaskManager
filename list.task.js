const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function getTasks(){

    try {
        const response = await axios.get('http://localhost:3000/tasks');
        console.log('Current Tasks');
        response.data.forEach(task=>{
            console.log(`- ${task.title} (Due: ${new Date(task.dueDate).toLocaleDateString()})`);
        })
    } catch (error) {
        console.log(error);
    }

}

getTasks()