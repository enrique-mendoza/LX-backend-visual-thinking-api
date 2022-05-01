const StudentController = require('./controllers/StudentController');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'Welcome!'});
});

app.get('/students/all', (req, res) => {
    const explorers = StudentController.getStudents();
    res.json({explorers});
});

app.get('/students/certifications', (req, res) => {
    const emails = StudentController.getStudentsEmailsByCertification();
    res.json({emails});
});

app.get('/students/greater500', (req, res) => {
    const credits = StudentController.getStudentsCreditsGreaterThan500();
    res.json({credits});
});

app.listen(port, () => {
    console.log(`Running localhost:${port}`);
});