import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toolbar from './Toolbar';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import { Container } from 'reactstrap';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [toggleEditorView, setToggleEditorView] = useState(false);

    const handleToggle = () => {
        setToggleEditorView(!toggleEditorView);
    }

    useEffect(() => {
        axios
            .get('http://localhost:3001/notes')
            .then((req, res) => {
                const notes = req.data
                setNotes(notes);
            })
    }, []);

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
