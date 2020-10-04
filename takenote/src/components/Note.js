import React from 'react';
//import noteService from '../services/note'
import axios from 'axios';
import { Card, CardTitle, CardText, Row, Col, Button, Badge } from 'reactstrap';

const Note = ({ note, notesList, setNotes }) => {

    const handleRemoveNote = () => {
        const id = note.id;

        axios
            .delete(`http://localhost:3001/notes/${id}`)
            .then(res => {
                return res.data
            })
        /*
        noteService
            .remove(id)
            .then(removed => removed)
        */
        setNotes(notesList.filter(note => note.id !== id))
    }

    return (
        <Card body className="mx-4 my-3" >
            <Row>
                <Col>
                    <CardTitle className="font-weight-bold">{note.title.toUpperCase()}</CardTitle>
                </Col>
                <Col xs="1">
                    <Button close onClick={() => handleRemoveNote()} />
                </Col>
            </Row>
            <Row className="border-bottom pb-2">
                <Col className="font-weight-light font-italic text-secondary">
                    {note.date}  {note.time}
                </Col>
            </Row>
            <CardText className="mt-4">{note.content}</CardText>
            <Row>
                <Col>
                    {note.important ? <Badge color="info">Important</Badge> : null}
                </Col>
            </Row>
        </Card >
    );
}

export default Note;