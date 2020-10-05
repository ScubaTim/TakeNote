import React, { useState, useEffect } from 'react';
import noteService from '../services/note';
import { Container, Row, Col } from 'reactstrap';
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

    const toggleEditorView = () => {
        setEditorView(!editorView);
    }

    //If no notes to display, show note editor instead.
    if (notes.length === 0) {
        return (
            <>
                <Toolbar toggleEditorView={toggleEditorView} editorView={editorView} />
                <Container>
                    <Row>
                        <Col>
                            <NoteEditor notes={notes} setNotes={setNotes} toggleEditorView={toggleEditorView} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

    //If there are notes, show NoteList UNLESS editorView is pressed, then show NoteEditor.
    return (
        <>
            <Toolbar toggleEditorView={toggleEditorView} editorView={editorView} />
            <Container>
                {editorView
                    ? <Row><Col><NoteEditor notes={notes} setNotes={setNotes} toggleEditorView={toggleEditorView} /></Col></Row>
                    : <Row><Col><NotesList notesList={notes} setNotes={setNotes} toggleEditorView={toggleEditorView} /></Col></Row>}
            </Container>
        </>
    );
};

export default App;
