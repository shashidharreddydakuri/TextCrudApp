const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const wordSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("word", wordSchema)