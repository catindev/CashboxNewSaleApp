import {
    FETCH_SECTIONS,
    SECTIONS_FETCHED,
    SECTIONS_ERROR
} from '../actions/sections';

export default function sectionsReducer(state = {}, action) {
    switch (action.type) {
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