const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://meetjn2542:JDaiMNU5JtobbdKL@meet.hafzzsb.mongodb.net/todos")// .env

const todoschema = mongoose.Schema ({
    title: String,
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todos', todoschema);
module.exports = {todo}