import {
    ADD_GOAL,
    DELETE_GOAL, GOALS_LOADED,
    SAVE_GOAL,
    SET_OFFSET
} from "../constants/action-types";

const initialState = {
    goals: [],
    offset: 0
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_GOAL) {
        return Object.assign({}, state, {
            goals: state.goals.concat(action.payload)
        });
    }
    if (action.type === SAVE_GOAL) {
        return Object.assign({}, state, {
            goals: state.goals.filter((g) => g.uuid !== action.payload.uuid).concat(action.payload)
        });
    }

    if (action.type === DELETE_GOAL) {
        return Object.assign({}, state, {
            goals: state.goals.filter((g) => g.uuid !== action.uuid)
        });
    }

    if (action.type === GOALS_LOADED) {
        return Object.assign({}, state, {
            goals: state.goals.concat(action.payload)
        });
    }

    if (action.type === SET_OFFSET) {
        return Object.assign({}, state, {
            offset: action.payload,
        });
    }

    return state;
}

export default rootReducer;
