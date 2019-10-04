const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

TaskSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;