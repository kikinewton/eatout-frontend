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
      console.log("called the ADD_COMMENT action creator");
      let comment = action.payload;
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
