const { request } = require('express');
const Task = require('./model');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createTask = async (req, res) => {
   
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        await Task.updateOne({ id: taskID }, { $set: req.body });
        return res.status(200).json({ msg: 'Task updated successfully', id: taskID, data: req.body });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        await Task.deleteOne({ id: taskID });
        return res.status(200).json({ msg: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteAllTask = async (req, res) => {
    try {
        await Task.deleteMany({});
        return res.status(200).json({ msg: 'All Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.getTask = getTask;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;
module.exports.deleteAllTask = deleteAllTask;