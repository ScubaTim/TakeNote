import React, { useState } from 'react';
import noteService from '../services/note';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const NoteEditor = ({ notes, setNotes, toggleEditorView }) => {
    const [noteContent, setNoteContent] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const handleAddNote = (e) => {
        e.preventDefault();

        const newNote = {
            title: newTitle,
            content: noteContent,
            important: isImportant,
        }

        noteService
            .create(newNote)
            .then((returnedNote) => {
                setNotes(notes.concat(returnedNote))
            })
            .catch((error) => {
                alert(`There was an error adding notes. Error Message: ${error}`)
            })

        //toggleEditorViews away from the editor on submit, back to NotesList. If () statement is necessary, or first note doesn't cause toggle
        if (notes.length > 0) {
            toggleEditorView();
        }
    }

    return (
        <Form className="border px-3 pt-4 pb-2 my-4" onSubmit={handleAddNote}>
            <h2 className="text-center">New Note</h2>
            <FormGroup>
                <Label for="title">Title:</Label>
                <Input type="text" id="title" onChange={(e) => setNewTitle(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="noteText">Body:</Label>
                <Input type="textarea" id="noteText" onChange={(e) => setNoteContent(e.target.value)} style={{ minHeight: "38vh" }} />
            </FormGroup>
            <Row>
                <Col>
                    <Button type="submit" color="primary">Save</Button>
                </Col>
                <Col>
                    <FormGroup className="text-right pt-2 mr-3" check>
                        <Input type="checkbox" onClick={() => setIsImportant(!isImportant)} />
                        <Label check className="mb-2" >
                            <strong>Mark Important</strong>
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
};

export default NoteEditor;