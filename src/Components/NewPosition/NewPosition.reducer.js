import {
    RESET_POSITION_ERRORS,

    EDIT_NAME, EDIT_QTY, EDIT_PRICE,
    EDIT_SECTION, EDIT_DISCOUNT, EDIT_MARKUP,

    CALCULATE_AND_ADD_POSITION,
    ADD_POSITION_ERROR,
    POSITION_FORM_RESET
} from './NewPosition.actions';
import initial from '../../Store/initial';

// Шаблон для пустой формы новой позиции
const PositionForm = initial.PositionForm;

const editPosition = (state, action) => ({
    ...state, PositionForm: {
        ...state.PositionForm,
        ...action.payload
    }
});


export default function positionsReducer(state = {}, action) {
    switch (action.type) {

        case POSITION_FORM_RESET:
            return { ...state, PositionForm, PositionFormErrors: {} };

        case RESET_POSITION_ERRORS:
            return { ...state, PositionFormErrors: {} };

        case EDIT_NAME: return editPosition(state, action);
        case EDIT_QTY: return editPosition(state, action);
        case EDIT_PRICE: return editPosition(state, action);
        case EDIT_SECTION: return editPosition(state, action);
        case EDIT_DISCOUNT: return editPosition(state, action);
        case EDIT_MARKUP: return editPosition(state, action);

        case ADD_POSITION_ERROR:
            return {
                ...state, PositionFormErrors: {
                    ...state.PositionFormErrors, ...action.errors
                }
            };

        case CALCULATE_AND_ADD_POSITION:
            if (state.SystemErrors.length > 0 || state.Fetching) return state;

            const Positions = [...state.Positions, action.Position];
            return {
                ...state, PositionForm, Positions,
                Total: action.Total,
                PrecheckSaved: false
            };

        default:
            return state;
    }
}