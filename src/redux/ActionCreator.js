import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const postFeedback = (
  firstname,
  lastname,
  email,
  telnum,
  agree,
  message,
  contactType
) => (dispatch) => {
  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    telnum: telnum,
    agree: agree,
    message: message,
    contactType: contactType,
  };
  newFeedback.date = new Date().toISOString();
  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error: " + response.status + "\n " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addFeedback(response)))
    .catch((error) => {
      alert(`Your feedback couldnt be sent \n Error: ${error.message}`);
    });
};

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };
  newComment.date = new Date().toISOString();
  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("post comments", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

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

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());
  console.log("fetch leaders action creator");
  fetch(baseUrl + "leaders")
    .then(
      (response) => {
        if (response.ok) return response;
        else {
          const err = new Error(
            "Error fetching leaders \n" +
              response.status +
              " " +
              response.statusText
          );
          err.response = response;
          throw err;
        }
      },
      (err) => {
        const errmess = new Error(err.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((err) => new Error(err.message));
};

export const commentsLoading = () => ({
  type: ActionTypes.COMMENTS_LOADING,
});

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
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

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errmessage) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmessage,
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});
