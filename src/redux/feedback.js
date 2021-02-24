import * as ActionTypes from "./ActionTypes";

const initialState = {
    errMessage: null,
    isLoading: false,
    feedback: []
}

export const Feedback = (state = initialState, action) => {
    console.log("feedback action creator")
    switch (action.type) {
        case ActionTypes.FEEDBACK_FAILED :
            return {...state, isLoading: false, errMessage: action.payload, feedback: []}
        case ActionTypes.ADD_FEEDBACK: 
            return {...state, isLoading: false, errMessage: null, feedback: action.payload}
        default:
            return state;
    }
}