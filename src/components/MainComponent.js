// import "./App.css";
import Menu from "./MenuComponent";
import { useState } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

import Contact from "./ContactComponent";

function Main() {
  // eslint-disable-next-line no-unused-vars
  const [dishes, setDishes] = useState(DISHES);
  // eslint-disable-next-line no-unused-vars
  const [leaders, setLeaders] = useState(LEADERS);
  // eslint-disable-next-line no-unused-vars
  const [comments, setComments] = useState(COMMENTS);
  // eslint-disable-next-line no-unused-vars
  const [promotions, setPromotions] = useState(PROMOTIONS);

  const HomePage = () => {
      console.log("dishes", dishes);
    return (
      <Home
      
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
