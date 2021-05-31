import store from "../store";

export interface GoalInterface<ActivityType> {
    uuid: string,
    type: string,
    name: string,
    activity: GoalActivity<ActivityType>
}

export interface GoalActivity<ActivityType> {
    [key: string]: ActivityType
}

export type StoreDispatch = typeof store.dispatch

export interface AppState {
    goals: Array<any>,
    offset: number,
}

export interface DateLabel {
    formatted: string,
    day: string,
    dow: string,
    isHoliday: boolean,
}

export interface NewGoalProps {
    addGoal: Function,
}

export interface GoalProps {
    offset: number,
    goal: GoalInterface<any>,
}
