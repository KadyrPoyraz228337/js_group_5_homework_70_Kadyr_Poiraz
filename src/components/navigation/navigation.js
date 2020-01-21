import React from 'react';
import {Container, Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand tag={Link} to='/' >TV Shows</NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Navigation;