import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent"
import { useState } from "react";

import {DISHES} from './shared/dishes';


function Main() {
    // eslint-disable-next-line no-unused-vars
    const [dishes, setDishes] = useState(DISHES);
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"> Ristorante Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );
}

export default Main;
