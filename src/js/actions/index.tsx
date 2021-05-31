import {
    ADD_GOAL,
    DELETE_GOAL, GOALS_LOADED,
    SAVE_GOAL,
    SET_OFFSET
} from "../constants/action-types";
import {GoalInterface, StoreDispatch} from "../types";

export function addGoal(payload: GoalInterface<any>) {
    const str = localStorage.getItem('goals') || "[]";
    const goals = JSON.parse(str);
    goals.push(payload);
    localStorage.setItem('goals', JSON.stringify(goals));
    return { type: ADD_GOAL, payload }
}

export function deleteGoal(id: string) {
    localStorage.removeItem('goal-' + id);
    return { type: DELETE_GOAL, uuid: id }
}

export function saveGoal(payload: any) {
    localStorage.setItem('goal-' + payload.uuid, JSON.stringify(payload));
    return { type: SAVE_GOAL, payload: payload }
}

export function loadGoals() {
    return function(dispatch: StoreDispatch) {
        const payloadString = localStorage.getItem('goals') || "[]";
        const payload = JSON.parse(payloadString);
        dispatch({ type: GOALS_LOADED, payload: payload })
    };
}

export function incDateOffset() {
    return function (dispatch: StoreDispatch, getState: Function) {
        const existingOffset = getState()['offset'];
        return dispatch({
            type: SET_OFFSET,
            payload: existingOffset + 1,
        })
    }
}

export function decDateOffset() {
    return function (dispatch: StoreDispatch, getState: Function) {
        const existingOffset = getState()['offset'];
        if (existingOffset > 0) {
            return dispatch({
                type: SET_OFFSET,
                payload: existingOffset - 1,
            })
        }
    }
}
