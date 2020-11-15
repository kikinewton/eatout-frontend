import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar dark>
        <div className="container">
          <NavbarBrand href="/">Ristorant ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorant ConFusion</h1>
              <p>Taste you cant resist</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </React.Fragment>
  );
};


export default Header;
