import { TOGGLE_POSITION_STORNO, CALCULATE_TOTAL } from './Precheck.actions';

export default function precheckReducer(state = {}, action) {
    switch (action.type) {

        case TOGGLE_POSITION_STORNO:
            const { index } = action;
            const Positions = [...state.Positions];
            Positions[index] = {
                ...Positions[index],
                Storno: !Positions[index].Storno
            };
            return { ...state, Positions };

        case CALCULATE_TOTAL:
            const { Total, Change } = action;
            return { ...state, Total, Change };

        default:
            return state;
    }
}
