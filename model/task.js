const mongoose =require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    dueData:Date,
    completed:{type:Boolean,default:false},
    recurring:{type:Boolean,default:false},
    recurringInterval:{type:String,enum:['daily','weekly','monthly']}
})


module.exports = mongoose.model('Task',taskSchema);