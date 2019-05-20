import {
    RESET_ERRORS,
    EDIT_POSITION,
    ADD_POSITION,
    ADD_POSITION_ERROR,
    TOGGLE_POSITION_STORNO,
    POSITION_FORM_RESET
} from '../actions/positions';
import { add, edit, reset, onAddError, storno, resetErrors } from './positions';

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
        case RESET_ERRORS:
            return resetErrors(state);

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

        // Positions reducers
        case ADD_POSITION:
            return add(state, action);
        case EDIT_POSITION:
            return edit(state, action);
        case ADD_POSITION_ERROR:
            return onAddError(state, action);
        case TOGGLE_POSITION_STORNO:
            return storno(state, action);
        case POSITION_FORM_RESET:
            return reset(state)

        default:
            return state;
    }
}
