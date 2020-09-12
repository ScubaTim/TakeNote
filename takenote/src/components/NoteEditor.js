import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NoteEditor = () => {

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