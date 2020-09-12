import React, { useState } from 'react';
import Toolbar from './Toolbar';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import { Container } from 'reactstrap';

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
];

const App = () => {
    const [newNote, setNewNote] = useState(false);

    const handleNewNote = () => {
        setNewNote(!newNote);
    }

    if (notes.length === 0) {
        return (
            <div>
                <Toolbar createNote={handleNewNote} />
                <Container>
                    <NoteEditor />
                </Container>
            </div>
        );
    }

    return (
        <div>
            <Toolbar createNote={handleNewNote} />
            <Container>
                {newNote ? <NoteEditor /> : <NotesList notesList={notes} />}
            </Container>
        </div>
    );
};

export default App;