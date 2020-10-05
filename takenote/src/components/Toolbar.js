import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Toolbar = ({ toggle, toggleView }) => {
    const label = toggleView ? 'Cancel' : `+ Create New Note`

    return (
        <Navbar color="light" light className="border-bottom">
            <NavbarBrand>
                <strong>TakeNote</strong>
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <Button color={toggleView ? 'warning' : 'info'} onClick={toggle}>
                        {label}
                    </Button>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Toolbar;