import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// export const addComment = (dishId, rating, author, comment) => ({
//   type: ActionTypes.ADD_COMMENTS,
//   payload: {
//     dishId: dishId,
//     rating: rating,
//     author: author,
//     comment: comment,
//   },
// });

export const fetchDishes = () => (dispatch) => {
  console.log("fetch dishes action creator");
  dispatch(dishesLoading());
  fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => new Error(err.message));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmessage) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmessage,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const fetchComments = () => (dispatch) => {
  console.log("fetch comments action creator");
  dispatch(dishesLoading());
  fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComment(comments)))
    .catch((err) => new Error(err.message));
};

export const commentsLoading = () => ({
  type: ActionTypes.COMMENTS_LOADING,
});

export const addComment = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const commentsFailed = (errmessage) => ({
  type: ActionTypes.COMMENT_FAILED,
  payload: errmessage,
});

export const fetchPromos = () => (dispatch) => {
  console.log("fetch promos action creator");
  dispatch(promosLoading());
  fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((err) => new Error(err.message));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

export const promosFailed = (errmessage) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmessage,
});
