import {
    ADD_POSITION,
    EDIT_POSITION
} from '../actions/positions';

export default function positionReducer(state = {}, action) {
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

        default:
            return state
    }
}