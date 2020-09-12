import React, { useState } from 'react';
import Note from './Note';
import styled from 'styled-components';
import { Row, Col, Input, Label } from 'reactstrap';

export const ListField = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
`

const NotesList = ({ notesList, setNotes }) => {
    const [showImportant, setShowImportant] = useState(false);

    const handleImportantOnly = () => {
        setShowImportant(!showImportant);
    }

    if (showImportant === false) {
        const Notes = notesList.map((note, i) => (
            <Col key={i} xs="4">
                <Note note={note} notesList={notesList} setNotes={setNotes} />
            </Col>
        ));

        return (
            <>
                <ListField className="py-3">
                    <Row>
                        {Notes}
                    </Row>
                </ListField>
                <hr />
                <Label check className="ml-4 pl-1 my-3">
                    <Input type="checkbox" onClick={() => handleImportantOnly()} />
                        Show Important Only
                </Label>
            </>
        );
    }

    if (showImportant === true) {
        const Notes = (
            notesList
                .filter((note) => note.important)
                .map((note, i) => (
                    <Col key={i} xs="4">
                        <Note note={note} notesList={notesList} setNotes={setNotes} />
                    </Col>
                ))
        );

        return (
            <>
                <ListField className="py-3">
                    <Row>
                        {Notes}
                    </Row>
                </ListField>
                <hr />
                <Label check className="ml-4 pl-1 my-3">
                    <Input type="checkbox" onClick={() => handleImportantOnly()} />
                        Show All
                </Label>
            </>
        )
    }
};

export default NotesList;