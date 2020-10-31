import "./App.css";
import { NavBar, NavBarBrand } from "reactstrap";

function App() {
  return (
    <div className="App">
      <NavBar dark color="primary">
        <div className="container">
          <NavBarBrand href="/"> Ristorante Confusion</NavBarBrand>
        </div>
      </NavBar>
    </div>
  );
}

export default App;
