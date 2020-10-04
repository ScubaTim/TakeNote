import React, { useState, useEffect } from 'react';
import noteService from '../services/note';
import Toolbar from './Toolbar';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import { Container } from 'reactstrap';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [toggleEditorView, setToggleEditorView] = useState(false);

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, []);

    const handleToggle = () => {
        setToggleEditorView(!toggleEditorView);
        console.log(notes)
    }

    //If no notes to display, show note editor instead.
    if (notes.length === 0) {
        return (
            <div>
                <Toolbar toggle={handleToggle} />
                <Container>
                    <NoteEditor notes={notes} setNotes={setNotes} toggle={handleToggle} />
                </Container>
            </div>
        );
    }

    //If there are notes, show NoteList unless toggleEditorView is pressed, then show NoteEditor.
    return (
        <div>
            <Toolbar toggle={handleToggle} />
            <Container>
                {toggleEditorView ? <NoteEditor notes={notes} setNotes={setNotes} toggle={handleToggle} /> : <NotesList notesList={notes} setNotes={setNotes} />}
            </Container>
        </div>
    );
};

export default App;
