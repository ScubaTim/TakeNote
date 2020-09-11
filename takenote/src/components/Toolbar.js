import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Toolbar = ({ toggle, toggled }) => {
    return (
        <Navbar color="light" light className="border-bottom">
            <NavbarBrand>
                <strong>TakeNote</strong>
            </NavbarBrand>
            <Nav>
                {toggled ? null : (
                    <NavItem>
                        <Button color="info" onClick={() => toggle()}>
                            <strong>+</strong> Create New Note
                        </Button>
                    </NavItem>
                )}
            </Nav>
        </Navbar>
    )
}

export default Toolbar;