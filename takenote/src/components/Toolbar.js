import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

const Toolbar = ({ editorView, toggleEditorView }) => {

    const label = editorView ? <span>Cancel</span> : <span><strong>+</strong> New Note</span>
    const btnColor = editorView ? 'warning' : 'info'

    return (
        <Navbar color="light" light className="border-bottom">
            <NavbarBrand>
                <strong>TakeNote</strong>
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <Button color={btnColor} onClick={toggleEditorView}>
                        {label}
                    </Button>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Toolbar;