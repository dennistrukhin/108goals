import {ADD_GOAL} from "../constants/action-types";

export function addGoal(payload) {
    localStorage.setItem('goal-' + payload.uuid, JSON.stringify(payload));
    return { type: ADD_GOAL, payload }
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
