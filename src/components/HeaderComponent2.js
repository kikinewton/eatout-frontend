import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Label,
  FormGroup,
  Form,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const [isNavOpen, setIsNavOpen] = useState(false);
  function toggleNav() {
    console.log("whats up");
    setIsNavOpen(!isNavOpen);
  }

  return (
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="40"
              alt="Ristorant ConFusion"
            />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info fa-lg"></span> About us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact us
                </NavLink>
              </NavItem>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={toggleModal}>
                    <span className="fa fa-sign-in fa-lg">Login</span>
                  </Button>
                </NavItem>
              </Nav>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorant ConFusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal isOpen={isModalOpen} toggle={() => toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                // innerRef={(input) => (username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                // innerRef={(input) => (this.password = input)}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  // innerRef={(input) => (this.remember = input)}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Header;
