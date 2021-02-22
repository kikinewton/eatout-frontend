import * as ActionTypes from "./ActionTypes";

const initialState = {
  errMessage: null,
    comments: [],
}
export const Comments = ( state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      console.log("called the ADD_COMMENTS action creator");
      let comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };

    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENT_FAILED:
      return {
        ...state,
        errMessage: action.payload,
      };

    default:
      return state;
  }
};
