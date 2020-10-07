import React, { useState, useCallback } from 'react';
import { Row, Col, Input, Label } from 'reactstrap';

import Note from './Note';


const NotesList = ({ notesList, setNotes }) => {
    const [showImportant, toggleShowImportant] = useState(false);

    const filteredNotesList = useCallback(
        () => (
            notesList
                .filter((note) => showImportant ? note.important : note)
                .map((note, i) => (
                    <Col key={i} xs="12" sm="6" md="4">
                        <Note note={note} notesList={notesList} setNotes={setNotes} />
                    </Col>
                ))
        ), [showImportant, notesList, setNotes]);

    const handleShowImportant = useCallback(
        () => {
            toggleShowImportant(!showImportant)
        }, [showImportant])

    return (
        <>
            <Row className="mb-5">
                <Col>
                    <Row className="d-flex flex-direction-column justify-content-between align-items-between">
                        {filteredNotesList()}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                    <Label check className="ml-4 pl-1 my-3">
                        <Input type="checkbox" onClick={handleShowImportant} />
                        {showImportant ? <span>Show All</span> : <span>Show Important Only</span>}
                    </Label>
                </Col>
            </Row>
        </>
    )
};

export default NotesList;