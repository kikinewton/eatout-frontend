// import "./App.css";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import { addComment, fetchDishes } from "../redux/ActionCreator";
import { useEffect } from "react";

function Main() {
  const dishes = useSelector((state) => state.dishes);
  const leaders = useSelector((state) => state.leaders);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);

  const dispatch = useDispatch();

  const handleAddComment = (dishId, rating, author, comment) => {
    dispatch(addComment(dishId, rating, author, comment));
  };

  const handleFetchDishes = () => (dispatch) => {
    dispatch(fetchDishes());
    console.log("finished")
  };

  useEffect(() => {
    handleFetchDishes();
  }, []);

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        key={dishes.dishes.id}
        dish={
          dishes.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        addComment={handleAddComment}
        isLoading={dishes.isLoading}
        errMess={dishes.errMess}
      />
    );
  };

  const HomePage = () => {
    console.log("dishes homepage", dishes)

    return (
      <Home
        dish={dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={dishes.isLoading}
        dishesErrMess={dishes.errMessage}
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
