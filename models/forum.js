const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const forumSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
},{
    timestamps: true
})
const Forum = mongoose.model("forum", forumSchema)
module.exports = Forum