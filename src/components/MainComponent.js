// import "./App.css";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from "../redux/ActionCreator";
import { useEffect } from "react";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Main() {
  useEffect(() => {
    handleFetchDishes();
    handleFetchPromos();
    handleFetchComments();
    handleFetchLeaders();
  }, []);

  const dishes = useSelector((state) => state.dishes);
  const leaders = useSelector((state) => state.leaders);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);
  
  let location = useLocation();

  // console.log("main promo", promotions);
  // console.log("main comments", comments);
  // console.log("main dishes", dishes);
  // console.log("main leaders", leaders)

  const dispatch = useDispatch();

  const handlePostComment = (dishId, rating, author, comment) => {
    dispatch(postComment(dishId, rating, author, comment));
  };

  const handleFetchDishes = () => {
    dispatch(fetchDishes());
  };

  const handleFetchLeaders = () => {
    dispatch(fetchLeaders());
  }

  const handleFetchComments = () => {
    dispatch(fetchComments());
  };

  const handleFetchPromos = () => {
    dispatch(fetchPromos());
  };

  const resetFeedBackForm = () => {
    dispatch(actions.reset("feedback"));
  };

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
        postComment={handlePostComment}
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
        leader={leaders.leaders.filter((leader) => leader.featured)[0]}
        leaderLoading={leaders.isLoading}
        leaderErrMess={leaders.errMess}
      />
    );
  };
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames='page' timeout={300}>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/about"
              component={() => <About leaders={leaders} />}
            />
            <Route
              exact
              path="/menu"
              component={() => <Menu dishes={dishes} />}
            />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route
              exact
              path="/contactus"
              component={() => (
                <Contact resetFeedBackForm={resetFeedBackForm} />
              )}
            />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default Main;
