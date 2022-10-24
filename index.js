const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;


const courses = require('./data/data.json');

app.get('/', (req, res) => {
    res.send('learning server is running')
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(crs => crs.id === id);
    res.send(course)
});

app.listen(port, () => {
    console.log(`learning running on port ${port}`);
});