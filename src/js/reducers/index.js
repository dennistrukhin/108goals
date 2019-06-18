import {ADD_GOAL, DELETE_GOAL, SAVE_GOAL, SET_ACTIVE_DATE, SET_ACTIVE_GOAL_ID} from "../constants/action-types";

const initialState = {
    goals: [],
    activeGoalId: undefined,
    activeDate: undefined,
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

    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            goals: state.goals.concat(action.payload)
        });
    }

    if (action.type === SET_ACTIVE_GOAL_ID) {
        return Object.assign({}, state, {
            activeGoalId: action.uuid,
        });
    }

    if (action.type === SET_ACTIVE_DATE) {
        return Object.assign({}, state, {
            activeDate: action.date,
        });
    }

    return state;
}

export default rootReducer;