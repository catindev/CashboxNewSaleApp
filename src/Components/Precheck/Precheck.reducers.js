import { TOGGLE_POSITION_STORNO, CALCULATE_TOTAL } from './Precheck.actions';

// TODO:
// 🙈 перенести расчёты в actions
const calculateTotal = positions => positions.reduce(
    (total, { Storno, Cost }) => Storno ? total : total + Cost, 0
);

export default function precheckReducer(state = {}, action) {
    switch (action.type) {

        case TOGGLE_POSITION_STORNO:
            const { index } = action;

            const Positions = [...state.Positions];
            Positions[index] = {
                ...Positions[index],
                Storno: !Positions[index].Storno
            };

            const Total = calculateTotal(Positions);

            return { ...state, Positions, Total };

        case CALCULATE_TOTAL:
            return { ...state, Total: calculateTotal(state.Positions) };

        default:
            return state;
    }
}
