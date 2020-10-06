require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')
const Note = require('./models/note')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.get('/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes.map(note => note.toJSON()))
    })
})

app.post('/notes', (req, res) => {
    const body = req.body

    if (!body.content || !body.title) {
        return res.status(400).json({ error: 'content missing' })
    }

    const note = new Note({
        title: body.title,
        content: body.content,
        important: body.important || false,
        date: new Date(),
    })

    note.save().then(savedNote => {
        res.json(savedNote.toJSON())
    })
})

app.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id)
        .then(note => {
            res.json(note.toJSON())
        })
})

app.delete('/notes/:id', (req, res) => {
    Note.findByIdAndRemove(req.params.id)
        .then(res => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

app.put('/notes/:id', (req, res) => {
    const body = req.body

    const note = {
        title: body.title,
        content: body.content,
        important: body.important,
    }

    Note.findByIdAndUpdate(req.params.id, note, { new: true })
        .then(updatedNote => {
            res.json(updatedNote.toJSON())
        })
        .catch(error => next(error))
})

/*
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.error(error.message)

    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)
*/
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})