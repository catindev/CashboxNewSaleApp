import {
    RESET_POSITION_ERRORS,
    EDIT_POSITION,
    ADD_POSITION,
    ADD_POSITION_ERROR,
    TOGGLE_POSITION_STORNO,
    POSITION_FORM_RESET
} from '../actions/positions';
import {
    addPosition, editPositionForm, onAddPositionError,
    resetNewPositionForm, stornoPosition,
    resetPositionFormErrors
} from './positions';

import {
    FETCH_SECTIONS,
    SECTIONS_FETCHED,
    SECTIONS_ERROR
} from '../actions/sections';
import { fetchSessions, onSessionsFetched, onSessionsError } from './sections';

import {
    FETCH_DOMAINS,
    DOMAINS_FETCHED,
    DOMAINS_ERROR
} from '../actions/domains';
import { fetchDomains, onDomainsFetched, onDomainsError } from './domains';

export default function mainReducer(state = {}, action) {
    switch (action.type) {

        // Sections reducers
        case FETCH_SECTIONS:
            return fetchSessions(state, action);
        case SECTIONS_FETCHED:
            return onSessionsFetched(state, action);
        case SECTIONS_ERROR:
            return onSessionsError(state, action);

        // Sections reducers
        case FETCH_DOMAINS:
            return fetchDomains(state, action);
        case DOMAINS_FETCHED:
            return onDomainsFetched(state, action);
        case DOMAINS_ERROR:
            return onDomainsError(state, action);

        // Преобразователи для работы с позициямиы
        case RESET_POSITION_ERRORS:
            return resetPositionFormErrors(state);
        case ADD_POSITION:
            return addPosition(state, action);
        case EDIT_POSITION:
            return editPositionForm(state, action);
        case ADD_POSITION_ERROR:
            return onAddPositionError(state, action);
        case POSITION_FORM_RESET:
            return resetNewPositionForm(state);
        case TOGGLE_POSITION_STORNO:
            return stornoPosition(state, action);

        default:
            return state;
    }
}
