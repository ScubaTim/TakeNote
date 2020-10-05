import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Input, Label } from 'reactstrap';
import Note from './Note';


//The "Grid"
const ListField = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
`

const NotesList = ({ notesList, setNotes }) => {
    const [showImportant, toggleShowImportant] = useState(false);

    const FilteredNotesList = () => {
        if (!showImportant) {
            //Generates a list of all notes with correct columns
            const Notes = notesList.map((note, i) => (
                <Col key={i} xs="12" sm="6" md="4">
                    <Note note={note} notesList={notesList} setNotes={setNotes} />
                </Col>
            ));
            return Notes;
        } else {
            //Generates a list of only important notes
            const Notes = (
                notesList
                    .filter((note) => note.important)
                    .map((note, i) => (
                        <Col key={i} xs="4">
                            <Note note={note} notesList={notesList} setNotes={setNotes} />
                        </Col>
                    ))
            );
            return Notes;
        }
    }

    return (
        <>
            <Row className="mb-5">
                <Col>
                    <ListField>
                        <Row>
                            {FilteredNotesList()}
                        </Row>
                    </ListField>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                    <Label check className="ml-4 pl-1 my-3">
                        <Input type="checkbox" onClick={() => toggleShowImportant(!showImportant)} />
                        {showImportant ? <span>Show All</span> : <span>Show Important Only</span>}
                    </Label>
                </Col>
            </Row>
        </>
    )
};

export default NotesList;