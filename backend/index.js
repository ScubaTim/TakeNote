const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

let notes = [];

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the TakeNote Backend</h1>')
})

app.get('/notes', (req, res) => {
    res.json(notes);
})

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id)

    note ? res.json(note) : res.status(404).end();
})

app.delete('/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id)
    res.status(204).end();
})

const generateId = () => {
    let maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0;
    return maxId + 1;
}

const date = new Date().toLocaleTimeString
console.log(date)

app.post('/notes', (req, res) => {
    const body = req.body;

    if (!body.content) {
        return res.status(400).json({
            error: 'content missing'
        });
    };

    const note = {
        title: body.title,
        content: body.content,
        important: body.important || false,
        date: new Date().toLocaleString(),
        id: generateId()
    };

    notes = notes.concat(note);

    res.json(note);
})



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});