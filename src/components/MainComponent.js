// import "./App.css";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";

function Main() {
  const dishes = useSelector((state) => state.dishes);
  const leaders = useSelector((state) => state.leaders);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);

  console.log("contact component", Contact)

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        key={dishes.id}
        dish={
          dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comment={comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  const HomePage = () => {
    // console.log("dishes", dishes);
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
        <Route
          exact
          path="/about"
          component={() => <About leaders={leaders} />}
        />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
