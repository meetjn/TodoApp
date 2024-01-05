const mongoose = require("mongoose");


mongoose.connect("")// .env

const todoschema = mongoose.Schema ({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todos', todoschema);
module.exports = {todo}
