const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.listen(port, () => {
    console.log(`serveur sur http://localhost:${port}`);
})

// Routes API

app.post('/api/tasks', (req, res) => {
    const newTask = req.body;
    MyTasks.push(newTask);

    console.log("Task : ", newTask)
    res.status(201).json({
        message: 'Post ok',
        task: newTask
    });
});

app.get('/api/tasks', (req, res) => {
    console.log("Task : ", MyTasks)
    res.status(200).json({
        message: 'Get ok',
        task: MyTasks
    });
});

app.put('/api/tasks/:id', (req, res) => {
    const taskID = req.params.id;
    const putTask = req.body;
    const task = MyTasks.find(task => task.id === Number(taskID))

    task.id = req.body;
    task.complété = req.body;
    task.titre = req.body;

    res.status(200).json({
        message: 'Put ok',
        task: task
    });
});

app.delete('/api/tasks/:id', (req, res) => {
    const taskID = req.params.id;
    
})

// Tableau

const MyTasks = [
    { id: 0, complété: false, titre: "monter" },
    { id: 1, complété: false, titre: "up" },
    { id: 2, complété: false, titre: "down" },
    { id: 3, complété: false, titre: "boom" },
    { id: 4, complété: false, titre: "bam" }
];