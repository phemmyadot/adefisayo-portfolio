import React from "react";
import styles from "./Navbar.module.scss";
import { Navbar, Nav } from "react-bootstrap";

function NavBar  (props) {
  return  (
  <Navbar expand="lg" className={styles.Navbar}>
    <Navbar.Brand className={styles.Brand} href="#home">
      Adefisayo Yusuf
    </Navbar.Brand>
    <Navbar.Toggle className={styles.Toggle} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className={styles.Link} onClick={()=>props.scroll(1)}>
          Home
        </Nav.Link>
        <Nav.Link className={styles.Link} onClick={()=>props.scroll(2)}>
          About
        </Nav.Link>
        <Nav.Link className={styles.Link} href="#contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);}

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default NavBar;
