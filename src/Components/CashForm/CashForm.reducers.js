import {
    EDIT_CASH_FORM
} from './CashForm.actions';

export default function positionsReducer(state = {}, action) {
    switch (action.type) {

        case EDIT_CASH_FORM:
            const { Cash, Change, NonCash } = action;
            return { ...state, Cash, Change, NonCash };

        default:
            return state;
    }
}