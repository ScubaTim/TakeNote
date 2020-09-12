import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toolbar from './Toolbar';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import { Container } from 'reactstrap';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState(false);

    const handleNewNote = () => {
        setNewNote(!newNote);
    }
    console.log()

    useEffect(() => {
        axios
            .get('http://localhost:3001/notes')
            .then(res => {
                const notes = res.data
                setNotes(notes);
            })
    }, []);

    //If no notes to display, show note editor instead.
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

    //If there are notes, show NoteList unless newNote is pressed, then show NoteEditor.
    return (
        <div>
            <Toolbar createNote={handleNewNote} />
            <Container>
                {newNote ? <NoteEditor /> : <NotesList notesList={notes} setNotes={setNotes} />}
            </Container>
        </div>
    );
};

export default App;