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
import {
    PRECHECK_ERRORS,
    PRECHECK_SAVE,
    PRECHECK_SAVE_ERRORS,
    PRECHECK_SAVED
} from './App.actions';
import initial from '../Store/initial';

// Шаблон для пустой формы новой позиции
const PositionForm = initial.PositionForm;


export default function appReducers(state = {}, action) {
    switch (action.type) {

        case FETCH_SECTIONS:
            return { ...state, SectionFetching: true };

        case SECTIONS_FETCHED:
            const { Sections } = action;
            return { ...state, Sections, SectionFetching: false };

        case SECTIONS_ERROR:
            return {
                ...state, SectionFetching: false,
                SystemErrors: [
                    ...state.SystemErrors,
                    'Не удалось загрузить справочник секций'
                ]
            };


        case FETCH_DOMAINS:
            return { ...state, DomainsFetching: true };

        case DOMAINS_FETCHED:
            const { Domains } = action;
            return {
                ...state, Domains, DomainsFetching: false,
                IdDomain: Domains[0].Id
            };

        case DOMAINS_ERROR:
            return {
                ...state, DomainsFetching: false,
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

        case PRECHECK_SAVE:
            return {
                ...state, PrecheckSaved: false,
                PrecheckErrors: [], PrecheckSaving: true
            };

        case PRECHECK_ERRORS:
            const { PrecheckErrors } = action;
            return { ...state, PrecheckErrors, PrecheckSaved: false };


        case PRECHECK_SAVE_ERRORS:
            return {
                ...state, PrecheckErrors: [action.error],
                PrecheckSaving: false,
                PrecheckSaved: false
            };

        case PRECHECK_SAVED:
            return {
                ...state,
                Positions: [],
                Cash: 0,
                NonCash: 0,
                Change: 0,
                Total: 0,
                PositionForm,
                PrecheckSaving: false,
                PrecheckSaved: true
            };

        default:
            return state;
    }
}