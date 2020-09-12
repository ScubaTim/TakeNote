import React from 'react';
import { Card, CardTitle, CardText, Row, Col, Button, Badge } from 'reactstrap';

const Note = ({ note }) => {


    return (
        <Card body className="mx-2 my-3" >
            <Row>
                <Col>
                    <CardTitle className="font-weight-bold">{note.title}</CardTitle>
                </Col>
                <Col xs="1">
                    <Button close />
                </Col>
            </Row>
            <Row className="border-bottom pb-2">
                <Col className="font-weight-light font-italic text-secondary">
                    {note.date}  {note.time}
                </Col>
            </Row>
            <CardText className="mt-4">{note.content}</CardText>
            <Row className="text-right">
                <Col>
                    {note.important ? <Badge color="info">Important</Badge> : null}
                </Col>
            </Row>
        </Card >
    );
}

export default Note;