import {
    FETCH_SECTIONS,
    SECTIONS_FETCHED,
    SECTIONS_ERROR,
} from './sections.actions';

import {
    FETCH_DOMAINS,
    DOMAINS_FETCHED,
    DOMAINS_ERROR,
    CHANGE_DOMAIN
} from './domains.actions';

export default function appReducers(state = {}, action) {
    switch (action.type) {

        case FETCH_SECTIONS:
            return { ...state, Fetching: true };

        case SECTIONS_FETCHED:
            const { Sections } = action;
            return { ...state, Sections, Fetching: false };

        case SECTIONS_ERROR:
            return {
                ...state, Fetching: false,
                SystemErrors: [
                    ...state.SystemErrors,
                    'Не удалось загрузить справочник секций'
                ]
            };

        case FETCH_DOMAINS:
            return { ...state, Fetching: true };

        case DOMAINS_FETCHED:
            const { Domains } = action;
            return { ...state, Domains, Fetching: false, IdDomain: Domains[0].Id };

        case DOMAINS_ERROR:
            return {
                ...state, Fetching: false,
                SystemErrors: [
                    ...state.SystemErrors,
                    'Ошибка при загрузке справочника видов деятельности'
                ]
            }

        case CHANGE_DOMAIN:
            const { Domain } = action;
            return {
                ...state, Domain,
                IdDomain: state.Domains[Domain].Id
            }

        default:
            return state;
    }
}