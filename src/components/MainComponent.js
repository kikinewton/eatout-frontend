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
import { addComment, fetchDishes,fetchComments, fetchPromos } from "../redux/ActionCreator";
import { useEffect } from "react";
import { actions } from "react-redux-form";

function Main() {
  const dishes = useSelector((state) => state.dishes);
  const leaders = useSelector((state) => state.leaders);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);

  console.log("main promo", promotions);
  console.log("main comments", comments);
  console.log("main dishes", dishes);




  const dispatch = useDispatch();

  const handleAddComment = (dishId, rating, author, comment) => {
    dispatch(addComment(dishId, rating, author, comment));
  };

  const handleFetchDishes = () => {
    dispatch(fetchDishes());
  };

  const handleFetchComments = () => {
    dispatch(fetchComments())
  }

  const handleFetchPromos = () => {
    dispatch(fetchPromos())
  }

  const resetFeedBackForm = () => {
    dispatch(actions.reset("feedback"));
  };

  useEffect(() => {
    handleFetchDishes();
    handleFetchPromos();
    handleFetchComments();
  }, [dispatch]);

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        key={dishes.dishes.id}
        dish={
          dishes.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={comments.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        commentsErrorMessage={comments.errMess}
        addComment={handleAddComment}
        isLoading={dishes.isLoading}
        errMess={dishes.errMess}
      />
    );
  };

  const HomePage = () => {

    return (
      <Home
        dish={dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={dishes.isLoading}
        dishesErrMess={dishes.errMessage}
        promotion={promotions.promotions.filter((promo) => promo.featured)[0]}
        promosLoading={promotions.isLoading}
        promosErrMess={promotions.errMessage}
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
        <Route
          exact
          path="/contactus"
          component={() => <Contact resetFeedBackForm={resetFeedBackForm} />}
        />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
