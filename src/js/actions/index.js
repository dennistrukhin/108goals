import {
    ADD_GOAL,
    DELETE_GOAL,
    SAVE_GOAL,
    SET_ACTIVE_DATE,
    SET_ACTIVE_GOAL_ID,
    SET_OFFSET
} from "../constants/action-types";

export function addGoal(payload) {
    localStorage.setItem('goal-' + payload.uuid, JSON.stringify(payload));
    return { type: ADD_GOAL, payload }
}

export function deleteGoal(id) {
    localStorage.removeItem('goal-' + id);
    return { type: DELETE_GOAL, uuid: id }
}

export function saveGoal(payload) {
    localStorage.setItem('goal-' + payload.uuid, JSON.stringify(payload));
    return { type: SAVE_GOAL, payload: payload }
}

export function setActiveGoalId(id) {
    return { type: SET_ACTIVE_GOAL_ID, uuid: id }
}

export function setActiveDate(date) {
    return { type: SET_ACTIVE_DATE, date: date }
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

export function incDateOffset() {
    return function (dispatch, getState) {
        const existingOffset = getState()['offset'];
        return dispatch({
            type: SET_OFFSET,
            payload: existingOffset + 1,
        })
    }
}

export function decDateOffset() {
    return function (dispatch, getState) {
        const existingOffset = getState()['offset'];
        if (existingOffset > 0) {
            return dispatch({
                type: SET_OFFSET,
                payload: existingOffset - 1,
            })
        }
    }
}
