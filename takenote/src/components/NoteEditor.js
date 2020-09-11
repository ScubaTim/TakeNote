import React from 'react';
//import noteService from '../services/notes';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NoteEditor = ({ notesList, setNotesList, toggle }) => {
    /* const [newTitle, setNewTitle] = useState("");
     const [isImportant, setIsImportant] = useState(false);
     const [newNote, setNewNote] = useState("");
 
     const addNote = (event) => {
         event.preventDefault();
         const noteObject = {
             title: newTitle,
             content: newNote,
             important: isImportant,
             time: new Date().toLocaleTimeString(),
             date: new Date().toLocaleDateString(),
             id: notesList.length + 1
         };
 
         noteService
             .create(noteObject)
             .then(returnedNote => {
                 setNotesList(notesList.concat(returnedNote));
                 setNewNote("");
             });
 
         toggle();
     };
 
     const handleTitleChange = (event) => {
         setNewTitle(event.target.value);
     };
 
     const handleNoteChange = (event) => {
         setNewNote(event.target.value);
     };
 
     const handleImportanceChange = () => {
         setIsImportant(!isImportant);
     };*/

    return (
        <Form className="border px-5 py-4  mx-4 my-4">
            <h2 className="text-center">New Note</h2>
            <FormGroup>
                <Label for="title">Title:</Label>
                <Input type="text" id="title" />
            </FormGroup>
            <FormGroup>
                <Label for="noteText">Body:</Label>
                <Input type="textarea" id="noteText" style={{ minHeight: "50vh" }} />
            </FormGroup>
            <FormGroup className="text-right my-2 mr-1" check>
                <Input type="checkbox" />
                <Label check>
                    <strong>Important</strong>
                </Label>
            </FormGroup>
            <Button type="submit" color="primary">Save</Button>
        </Form>
    );
};

export default NoteEditor;