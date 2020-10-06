import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';

import noteService from '../services/note';

import Toolbar from './Toolbar';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';


const App = () => {
    const [notes, setNotes] = useState([]);
    const [editorView, setEditorView] = useState(false);

    useEffect(() => {
        //Get notes from database
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
            .catch((error) => {
                alert(`There was an error getting notes: ${error}`)
            })
    }, []);

    const toggleEditorView = useCallback(
        () => {
            setEditorView(!editorView);
        }, [editorView]);

    return (
        <>
            <Toolbar toggleEditorView={toggleEditorView} editorView={editorView} />
            <Container>
                <Row>
                    <Col>
                        {editorView || notes.length === 0
                            ? <NoteEditor notes={notes} setNotes={setNotes} toggleEditorView={toggleEditorView} />
                            : <NotesList notesList={notes} setNotes={setNotes} toggleEditorView={toggleEditorView} />}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
