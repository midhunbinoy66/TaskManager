const schedule = require('node-schedule');
const nodeMailer = require('nodemailer');
const Task = require('../model/task');


const transporter = nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS 
    }
});

const sendReminder =async (task)=>{
    const mailOptions ={
        from:process.env.EMAIL_USER,
        to:process.env.RECIPIENT_EMAIL,
        subject:'Task Reminder',
        text: `Dont forget to ${task.title} \n Description: ${task.description}`
    };

    await transporter.sendMail(mailOptions);
}




const checkAndSendReminders = async ()=>{
    const today = new Date();
    today.setHours(0,0,0,0);

    const tasks = await Task.find({
        dueDate:{$gte:today,$lt:new Date(today.getTime()+24 *60*60*1000)},
        completed:false
    });


    for(const task of tasks){
        await sendReminder(task);

        if(task.recurring){
            const newDueDate = new Date(task.dueDate);
            switch(task.recurringInterval){
                case 'daily':
                    newDueDate:setDate(newDueDate.getDate()+1);
                    break;
                case 'weekly':
                    newDueDate:setDate(newDueDate.getDate()+7);
                    break;
                case 'monthly':
                    newDueDate:setDate(newDueDate.getMonth()+1);
                    break;    
            }

            task.dueDate = newDueDate;
            await task.save()
        }
    }
}

const job = schedule.scheduleJob('0 9 * * *',checkAndSendReminders);

module.exports = {start:()=>console.log('Reminder job Scheduled')}