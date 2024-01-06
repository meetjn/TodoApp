const express = require("express");
const { todo } = require("./DB"); 
const { createTodo, updateTodo } = require("./types");  
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://localhost:5173"
}))



app.post('/Todo', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs",
        });
        return;
    }
    // put it in MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});

app.get('/todos', async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you have entered wrong input",
        });
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg: "todo is now completed"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
