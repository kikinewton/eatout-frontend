import * as ActionTypes from "./ActionTypes";

const initialState = {
  errMessages: null,
  isLoading: true,
  promotions: [],
};
export const Promotions = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PROMOS_LOADING:
      return { ...state, isLoading: true, errMessage: null, promotions: [] };
    case ActionTypes.ADD_PROMOS:
      console.log("called the ADD_PROMOS action creator");
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        promotions: action.payload,
      };

    case ActionTypes.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
      };

    default:
      return state;
  }
};
