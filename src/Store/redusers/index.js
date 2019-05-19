import {
    EDIT_POSITION,
    ADD_POSITION,
    TOGGLE_POSITION_STORNO
} from '../actions/positions';
import { add, edit, storno } from './positions';

import {
    FETCH_SECTIONS,
    SECTIONS_FETCHED,
    SECTIONS_ERROR
} from '../actions/sections';
import { fetchItems, onFetched, onError } from './sections';

export default function mainReducer(state = {}, action) {
    switch (action.type) {
        // Sections reducers
        case FETCH_SECTIONS:
            return fetchItems(state, action);
        case SECTIONS_FETCHED:
            return onFetched(state, action);
        case SECTIONS_ERROR:
            return onError(state, action);

        // Positions reducers
        case ADD_POSITION:
            return add(state, action);
        case EDIT_POSITION:
            return edit(state, action);
        case TOGGLE_POSITION_STORNO:
            return storno(state, action);

        default:
            return state;
    }
}
