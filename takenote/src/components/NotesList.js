import React, { useState } from 'react';
import Note from './Note';
import styled from 'styled-components';
import { Row, Col, Input, Label } from 'reactstrap';

const ListField = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
`

const NotesList = ({ notesList, setNotes }) => {
    const [showImportant, setShowImportant] = useState(false);

    const toggleImportantOnly = () => {
        setShowImportant(!showImportant);
    }

    const important = (
        <Col>
            <hr />
            <Label check className="ml-4 pl-1 my-3">
                <Input type="checkbox" onClick={() => toggleImportantOnly()} />
                {showImportant ? <span>Show Important Only</span> : <span>Show All</span>}
            </Label>
        </Col>
    )

    if (showImportant === false) {
        //Generates a list of only the important notes with correct columns
        const Notes = notesList.map((note, i) => (
            <Col key={i} xs="12" sm="6" md="4">
                <Note note={note} notesList={notesList} setNotes={setNotes} />
            </Col>
        ));

        return (
            <>
                <Row className="mb-5">
                    <Col>
                        <ListField className="py-3">
                            <Row>
                                {Notes}
                            </Row>
                        </ListField>
                    </Col>
                </Row>
                <Row>
                    {important}
                </Row>
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
                <Row className="mb-5">
                    <Col>
                        <ListField>
                            <Row>
                                {Notes}
                            </Row>
                        </ListField>
                    </Col>
                </Row>
                <Row>
                    {important}
                </Row>
            </>
        )
    }
};

export default NotesList;