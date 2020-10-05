import React, { useState, useEffect } from 'react';
import noteService from '../services/note';
import Toolbar from './Toolbar';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import { Container, Row, Col } from 'reactstrap';


const App = () => {
    const [notes, setNotes] = useState([]);
    const [toggleEditorView, setToggleEditorView] = useState(false);

    useEffect(() => {
        //Gets all notes from database
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
            .catch((error) => {
                alert(`There was an error getting notes: ${error}`)
            })
    }, []);

    const handleToggle = () => {
        setToggleEditorView(!toggleEditorView);
    }

    //If no notes to display, show note editor instead.
    if (notes.length === 0) {
        return (
            <div>
                <Toolbar toggle={handleToggle} toggleView={toggleEditorView} />
                <Container>
                    <Row>
                        <Col>
                            <NoteEditor notes={notes} setNotes={setNotes} toggle={handleToggle} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    //If there are notes, show NoteList unless toggleEditorView is pressed, then show NoteEditor.
    return (
        <div>
            <Toolbar toggle={handleToggle} toggleView={toggleEditorView} />
            <Container>
                {toggleEditorView
                    ? <Row><Col><NoteEditor notes={notes} setNotes={setNotes} toggle={handleToggle} /> </Col></Row>
                    : <Row><Col><NotesList notesList={notes} setNotes={setNotes} /></Col></Row>}
            </Container>
        </div>
    );
};

export default App;
