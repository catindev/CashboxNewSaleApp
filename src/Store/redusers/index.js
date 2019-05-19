// import { combineReducers } from 'redux';
// import positions from './positions';
// import sections from './sections';

import {
    ADD_POSITION,
    EDIT_POSITION
} from '../actions/positions';

import {
    FETCH_SECTIONS,
    SECTIONS_FETCHED,
    SECTIONS_ERROR
} from '../actions/sections';

export default function mainReducer(state = {}, action) {
    switch (action.type) {
        case ADD_POSITION:
            return {
                ...state, Positions: [
                    ...state.Positions, action.Position
                ]
            }

        case EDIT_POSITION:
            return {
                ...state, PositionForm: {
                    ...state.PositionForm, ...action.payload
                }
            }

        case FETCH_SECTIONS:
            return { ...state, Fetching: true }

        case SECTIONS_FETCHED:
            return {
                ...state,
                Sections: action.Sections,
                Fetching: false
            }

        case SECTIONS_ERROR:
            return {
                ...state,
                SectionsError: 'Не удалось загрузить справочник',
                Fetching: false
            }

        default:
            return state
    }
}

// export default combineReducers({
//     positions, sections
// })
