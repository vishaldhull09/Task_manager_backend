const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        id: {
        type: String,
        unique: true
        },
        title: String,
        label: {
            type: String,
            enum: ["Bug", "Documentation", "Feature"],
            default: 'Bug'
        },
        status: {
            type: String,
            enum: ["In progress", "Backlog", "Todo", "Done", "Canceled"],
            default: 'In progress'
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: 'Low'
        },
        favorite: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

module.exports = Task;