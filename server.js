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

    task.id = req.body.id;
    task.complété = req.body.complété;
    task.titre = req.body.titre;

    res.status(200).json({
        message: 'Put ok',
        task: task
    });
});

app.delete('/api/tasks/:id', (req, res) => {
    const taskID = req.params.id;
    const task = MyTasks.findIndex(task => task.id === Number(taskID))
    MyTasks.splice(task, 1);

    res.status(200).json({
        message: 'Delete ok',
        task: task
    });
})

// test de nouvelles routes

app.patch('/api/tasks/:id/completed', (req, res) => {
    const taskID = req.params.id;
    const task = MyTasks.find(task => task.id === Number(taskID))

    task.complété = true;

    res.status(200).json({
        message: 'Patch ok',
        task: task
    });
})

app.get('/api/tasks/completed', (req, res) => {
    const task = MyTasks.filter(task => task.complété === true)

    console.log("Task completed: ", task)

    res.status(200).json({
        message: 'Filter ok',
        task: task
    });
})


// Tableau

const MyTasks = [
    { id: 0, complété: false, titre: "monter" },
    { id: 1, complété: false, titre: "up" },
    { id: 2, complété: false, titre: "down" },
    { id: 3, complété: false, titre: "boom" },
    { id: 4, complété: false, titre: "bam" }
];