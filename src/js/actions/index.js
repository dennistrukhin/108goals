import {ADD_GOAL, DELETE_GOAL, SET_ACTIVE_GOAL_ID} from "../constants/action-types";

export function addGoal(payload) {
    localStorage.setItem('goal-' + payload.uuid, JSON.stringify(payload));
    return { type: ADD_GOAL, payload }
}

export function deleteGoal(id) {
    localStorage.removeItem('goal-' + id);
    return { type: DELETE_GOAL, uuid: id }
}

export function setActiveGoalId(id) {
    return { type: SET_ACTIVE_GOAL_ID, uuid: id }
}

export function getData() {
    return function(dispatch) {
        let payload = [];
        for (const key in localStorage) {
            if (key.substr(0, 5) === 'goal-') {
                payload.push(JSON.parse(localStorage.getItem(key)));
            }
        }
        dispatch({ type: "DATA_LOADED", payload: payload })
    };
}
