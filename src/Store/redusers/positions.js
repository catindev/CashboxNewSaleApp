export const add = (state, action) => ({
    ...state, Positions: [
        ...state.Positions, action.Position
    ]
});

export const edit = (state, action) => ({
    ...state, PositionForm: {
        ...state.PositionForm, ...action.payload
    }
});

export const storno = (state, action) => {
    const Positions = [...state.Positions];
    Positions[action.index] = { ...Positions[action.index] };
    Positions[action.index].Storno = !Positions[action.index].Storno;
    return { ...state, Positions };
}

export default { add, edit, storno }