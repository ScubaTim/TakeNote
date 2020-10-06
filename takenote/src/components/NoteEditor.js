import React, { useState, useCallback } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import noteService from '../services/note';


const NoteEditor = ({ notes, setNotes, toggleEditorView }) => {
    const [noteContent, setNoteContent] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const handleAddNote = useCallback(
        (e) => {
            e.preventDefault();
            console.log("newTitle, noteContent, isImportant", newTitle, noteContent, isImportant)
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
            //Spookiness logs go here \/  :(

            //toggleEditorViews away from the editor on submit, back to NotesList. If () statement is necessary, or first note doesn't cause toggle
            if (notes.length > 0) {
                toggleEditorView();
            }
        }, [newTitle, noteContent, isImportant, toggleEditorView, notes, setNotes])

    const handleNewTitle = useCallback(
        (e) => {
            setNewTitle(e.target.value)
        }, [])

    const handleNoteContent = useCallback(
        (e) => {
            setNoteContent(e.target.value)
        }, [])

    const handleIsImportant = useCallback(
        () => {
            setIsImportant(!isImportant)
        }, [isImportant])

    return (
        <Form className="border px-3 pt-4 pb-2 my-4" onSubmit={handleAddNote}>
            <h2 className="text-center">New Note</h2>
            <FormGroup>
                <Label for="title">Title:</Label>
                <Input type="text" id="title" onChange={handleNewTitle} />
            </FormGroup>
            <FormGroup>
                <Label for="noteText">Body:</Label>
                <Input type="textarea" id="noteText" onChange={handleNoteContent} style={{ minHeight: "38vh" }} />
            </FormGroup>
            <Row>
                <Col>
                    <Button type="submit" color="primary">Save</Button>
                </Col>
                <Col>
                    <FormGroup className="text-right pt-2 mr-3" check>
                        <Input type="checkbox" onClick={handleIsImportant} />
                        <Label check className="mb-2 font-weight-bold" >
                            Mark Important
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
};

export default NoteEditor;