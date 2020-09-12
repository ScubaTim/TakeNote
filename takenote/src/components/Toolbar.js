import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Toolbar = ({ createNote }) => {
    return (
        <Navbar color="light" light className="border-bottom">
            <NavbarBrand>
                <strong>TakeNote</strong>
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <Button color="info" onClick={() => createNote()}>
                        <strong>+</strong> Create New Note
                    </Button>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Toolbar;