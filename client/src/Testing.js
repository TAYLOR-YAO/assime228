import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Navbar color="indigo" dark expand="md" scrolling className="navbar fixed-top navbar-light bg-faded">
                <NavbarBrand href="#">
                    <img src="https://image.freepik.com/vetores-gratis/e-commerce-conceito_23-2147505751.jpg" height="30" className="d-inline-block align-top"/>
                    Assime-228
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar className=".d-xl-flex">
                    <NavbarNav left>
                        <NavItem active>
                            <NavLink to="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Cart</NavLink>
                        </NavItem>
                    </NavbarNav>

                    <NavbarNav center>
                        
                        <NavItem>
                            <NavLink to="/cart">
                                Cart
                            </NavLink>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                    <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>Name</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="#">Profile</DropdownItem>
                                <DropdownItem href="#">Log out!</DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/cart">Pricing</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarFeatures;