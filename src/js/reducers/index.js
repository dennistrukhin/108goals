import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    tasks: [
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
    ]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.tasks.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;