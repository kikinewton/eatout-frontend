import * as ActionTypes from "./ActionTypes";

const initialState = {
  errMessages: null,
  isLoading: true,
  leaders: [],
};
export const Leaders = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LEADERS_FAILED:
      return { ...state, errMessages: action.payload, isLoading: false };
    case ActionTypes.LEADERS_LOADING:
      return { ...state, errMessages: null, isLoading: true, leaders: [] };
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        errMessages: null,
        leaders: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
