// import React, { Component } from "react";
// import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavLink, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
// import firebase from "firebase";
// import initialized from "../../../Privates/FirebaseAuth";
// import "./AdminToolBar.css";

// class AdminToolBar extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       collapse: false,
//       isWideEnough: false,
//       dropdownOpen: false,
//       isLogedIn: false,
//     }
// }

//   onClick(){
//     this.setState({
//         collapse: !this.state.collapse,
//     });
//   }

//   toggle() {
//     this.setState({
//         dropdownOpen: !this.state.dropdownOpen
//     });
//   }
//   render() {
//     return (
//       <Navbar color="indigo" dark expand="md" scrolling className="navbar fixed-top navbar-light bg-faded" height="60" >
//         <NavbarBrand href="/">
//             <img src="https://image.freepik.com/vetores-gratis/e-commerce-conceito_23-2147505751.jpg" alt="Brand Logo" height="50" className="d-inline-block align-top"/>
//             <span className="brand-text" style={{marginLeft:"5px"}}>Assime-228</span>
//         </NavbarBrand>
//         { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
//         <Collapse isOpen = { this.state.collapse } navbar className=".d-xl-flex">
//             <NavbarNav left>
    
//             </NavbarNav>

//             <NavbarNav >
                
//             <NavItem active>
//                     <NavLink to="/inventory">Inventory</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink to="orders">
//                       Order reviews
//                     </NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink to="sells">
//                       Cells
//                     </NavLink>
//                 </NavItem>

//                 <NavItem>
//                     <NavLink to="receiving">
//                       Receiving
//                     </NavLink>
//                 </NavItem>
//             </NavbarNav>
//             <NavbarNav right>
//             <NavItem>
//                     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                     <DropdownToggle className="upper-textes"  nav caret>Admin</DropdownToggle>
//                     <DropdownMenu>
//                         <DropdownItem href="#">Profile</DropdownItem>
//                         <DropdownItem href="/" onClick={()=>firebase.auth().signOut()}>Log out!</DropdownItem>
//                     </DropdownMenu>
//                     </Dropdown>
//                 </NavItem>
//                 <NavItem>
//                 </NavItem>
//             </NavbarNav>
//         </Collapse>
//     </Navbar>
//     )
//   }
// }


// export default AdminToolBar;

