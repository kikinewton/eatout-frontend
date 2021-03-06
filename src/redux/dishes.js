// import { DISHES } from "../shared/dishes";
import * as ActionTypes from "./ActionTypes";

const initialState = {
  isLoading: true,
  errMessage: null,
  dishes: [],
};

export const Dishes = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DISHES_LOADING:
      console.log('dishes loading ')
      return { ...state, isLoading: true, errMessage: null, dishes: [] };
    case ActionTypes.ADD_DISHES:
      console.log('called the ADD_DISHES action creator')
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        dishes: action.payload,
      };

    case ActionTypes.DISHES_FAILED:
      console.log('dishes failed')
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
      };

    default:
      return state;
  }
};
