import React, { useState } from 'react';
import noteService from '../services/note';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const NoteEditor = ({ notes, setNotes, toggle }) => {

    const [noteContent, setNoteContent] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const handleAddNote = (event) => {
        event.preventDefault();
        const newObject = {
            title: newTitle,
            content: noteContent,
            important: isImportant,
        }

        noteService
            .create(newObject)
            .then((returnedNote) => {
                setNotes(notes.concat(returnedNote))
            })

        if (notes.length > 0) {
            toggle();
        }
    }

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handleNoteContentChange = (e) => {
        setNoteContent(e.target.value);
    }

    return (
        <Form className="border px-3 py-4 my-4" onSubmit={handleAddNote}>
            <h2 className="text-center">New Note</h2>
            <FormGroup>
                <Label for="title">Title:</Label>
                <Input type="text" id="title" onChange={handleTitleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="noteText">Body:</Label>
                <Input type="textarea" id="noteText" onChange={handleNoteContentChange} style={{ minHeight: "50vh" }} />
            </FormGroup>
            <Row>
                <Col>
                    <Button type="submit" color="primary">Save</Button>
                </Col>
                <Col>
                    <FormGroup className="text-right py-2 mr-3" check>
                        <Input type="checkbox" onClick={() => setIsImportant(!isImportant)} />
                        <Label check >
                            <strong >Important</strong>
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
};

export default NoteEditor;