import calculatePositionCost from '../../Utils/CalculatePositionCost';

const calculateTotal = positions => positions.reduce(
    (total, { Storno, Cost }) => Storno ? total : total + Cost, 0
);

// Шаблон для пустой формы новой позиции
const PositionForm = {
    "Name": "",
    "Price": "",
    "Markup": 0,
    "Discount": 0,
    "Qty": 1,
    "Section": 0
};

export const resetPositionFormErrors = state => ({
    ...state, PositionFormErrors: {}
});

export const addPosition = (state, action) => {
    if (state.SystemErrors.length > 0) return state;

    const { Name, Id, Nds } = state.Sections[action.Position.Section];

    const newPosition = {
        ...action.Position,
        SectionName: Name, IdSection: Id, Nds
    };

    const Cost = calculatePositionCost(newPosition);
    const NdsValue = ((Cost / ((Nds / 100) + 1)) * (Nds / 100)).toFixed(2);

    const Positions = [
        ...state.Positions,
        { ...newPosition, Cost, NdsValue }
    ];

    const Total = calculateTotal(Positions);

    return { ...state, PositionForm, Positions, Total };
};

export const editPositionForm = (state, action) => ({
    ...state, PositionForm: {
        ...state.PositionForm, ...action.payload
    }
});

export const onAddPositionError = (state, action) => ({
    ...state, PositionFormErrors: {
        ...state.PositionFormErrors, ...action.errors
    }
});

export const resetNewPositionForm = state => ({
    ...state, PositionForm, PositionFormErrors: {}
});

export const stornoPosition = (state, action) => {
    const { index } = action;

    const Positions = [...state.Positions];
    Positions[index] = {
        ...Positions[index],
        Storno: !Positions[index].Storno
    };

    const Total = calculateTotal(Positions);

    return { ...state, Positions, Total };
}

export default {
    addPosition, editPositionForm, onAddPositionError,
    resetNewPositionForm, stornoPosition,
    resetPositionFormErrors
}