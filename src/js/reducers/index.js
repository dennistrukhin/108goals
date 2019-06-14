import {ADD_GOAL} from "../constants/action-types";

const initialState = {
    goals: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_GOAL) {
        return Object.assign({}, state, {
            goals: state.goals.concat(action.payload)
        });
    }

    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            goals: state.goals.concat(action.payload)
        });
    }

    return state;
}

export default rootReducer;