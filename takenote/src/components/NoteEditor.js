import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NoteEditor = ({ notes, setNotes, toggle }) => {

    const [noteContent, setNoteContent] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const handleAddNote = (event) => {
        event.preventDefault();
        const noteObject = {
            title: newTitle,
            content: noteContent,
            important: isImportant,
        }

        axios
            .post('http://localhost:3001/notes', noteObject)
            .then(res => {
                setNotes(notes.concat(res.data))
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
        <Form className="border px-5 py-4  mx-4 my-4" onSubmit={handleAddNote}>
            <h2 className="text-center">New Note</h2>
            <FormGroup>
                <Label for="title">Title:</Label>
                <Input type="text" id="title" onChange={handleTitleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="noteText">Body:</Label>
                <Input type="textarea" id="noteText" onChange={handleNoteContentChange} style={{ minHeight: "50vh" }} />
            </FormGroup>
            <FormGroup className="text-right my-2 mr-1" check>
                <Input type="checkbox" onClick={() => setIsImportant(!isImportant)} />
                <Label check>
                    <strong>Important</strong>
                </Label>
            </FormGroup>
            <Button type="submit" color="primary">Save</Button>
        </Form>
    );
};

export default NoteEditor;