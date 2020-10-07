import React, { useCallback } from 'react';
import { Card, CardTitle, CardText, Row, Col, Button, Badge } from 'reactstrap';

import noteService from '../services/note'


const Note = ({ note, notesList, setNotes }) => {

    const handleRemoveNote = useCallback(() => {
        //Removes note from database
        noteService
            .remove(note.id)
            .then(removed => removed)
            .catch((error) => {
                alert(`There was an error removing the note: ${error}`)
            })

        //New state minus the removed note
        setNotes(notesList.filter(n => n.id !== note.id))
    }, [setNotes, notesList, note]);

    return (
        <Card body className="mx-4 my-3" >
            <Row>
                <Col>
                    <CardTitle className="font-weight-bold">{note.title}</CardTitle>
                </Col>
                <Col xs="1">
                    <Button close onClick={handleRemoveNote} />
                </Col>
            </Row>
            <Row className="border-bottom pb-2">
                <Col >
                    <span className="font-weight-light font-italic text-secondary">{note.date}{note.time}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardText className="mt-4">{note.content}</CardText>
                </Col>
            </Row>
            {note && note.important && (
                <Row>
                    <Col>
                        <Badge color="info">Important</Badge>
                    </Col>
                </Row>
            )}
        </Card >
    );
}

export default Note;