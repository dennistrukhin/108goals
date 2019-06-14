import {ADD_GOAL} from "../constants/action-types";

const sampleData = [
    {
        uuid: '123',
        type: 'boolean',
        name: 'Sample boolean task',
        activity: {
            '2019-06-07': false,
            '2019-06-08': true,
            '2019-06-09': false,
            '2019-06-10': true,
            '2019-06-11': true,
            '2019-06-12': true,
            '2019-06-13': false,
            '2019-06-14': true,
        }
    },
    {
        uuid: '124',
        type: 'time',
        name: 'First task goes here',
        activity: {
            '2019-06-07': [8, 41],
            '2019-06-08': [8, 42],
            '2019-06-09': [8, 49],
            '2019-06-10': [8, 37],
            '2019-06-11': [8, 38],
            '2019-06-12': [9, 2],
            '2019-06-13': [8, 49],
            '2019-06-14': [8, 27],
        }
    },
];

export function addGoal(payload) {
    return { type: ADD_GOAL, payload }
}

export function getData() {
    return function(dispatch) {
        // return fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(response => response.json())
        //     .then(json => {
        //         dispatch({ type: "DATA_LOADED", payload: json });
        //     });
        dispatch({ type: "DATA_LOADED", payload: sampleData })
    };
}
