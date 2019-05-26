import {
    RESET_POSITION_ERRORS,
    EDIT_POSITION_FORM,
    CALCULATE_AND_ADD_POSITION,
    ADD_POSITION_ERROR,
    POSITION_FORM_RESET
} from './NewPosition.actions';
import initial from '../../Store/initial';

// Шаблон для пустой формы новой позиции
const PositionForm = initial.PositionForm;

export default function positionsReducer(state = {}, action) {
    switch (action.type) {

        case RESET_POSITION_ERRORS:
            return { ...state, PositionFormErrors: {} };

        case CALCULATE_AND_ADD_POSITION:
            if (state.SystemErrors.length > 0 || state.Fetching) return state;
            const Positions = [...state.Positions, action.Position];
            return { ...state, PositionForm, Positions, Total: action.Total };

        case EDIT_POSITION_FORM:
            return {
                ...state, PositionForm: {
                    ...state.PositionForm, ...action.payload
                }
            };

        case ADD_POSITION_ERROR:
            return {
                ...state, PositionFormErrors: {
                    ...state.PositionFormErrors, ...action.errors
                }
            };

        case POSITION_FORM_RESET:
            return {
                ...state, PositionForm, PositionFormErrors: {}
            };

        default:
            return state;
    }
}