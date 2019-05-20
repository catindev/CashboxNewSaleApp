export const resetErrors = state => ({
    ...state, Errors: {}
});

export const add = (state, action) => {
    const { Name, Id } = state.Sections[action.Position.Section];
    const newPosition = {
        ...action.Position, Price: parseInt(action.Position.Price),
        SectionName: Name, IdSection: Id

    };
    return {
        ...state,
        Positions: [
            ...state.Positions,
            newPosition
        ],
        PositionForm: {
            "Name": "",
            "Price": 0,
            "Markup": 0,
            "Discount": 0,
            "Qty": 1,
            "Section": 0
        }
    }
};

export const edit = (state, action) => ({
    ...state, PositionForm: {
        ...state.PositionForm, ...action.payload
    }
});

export const onAddError = (state, action) => ({
    ...state, Errors: {
        ...state.Errors, ...action.errors
    }
});

export const reset = state => ({
    ...state, PositionForm: {
        "Name": "",
        "Price": 0,
        "Markup": 0,
        "Discount": 0,
        "Qty": 1,
        "Section": 0
    }
});

export const storno = (state, action) => {
    const Positions = [...state.Positions];
    Positions[action.index] = {
        ...Positions[action.index],
        Storno: !Positions[action.index].Storno
    };
    return { ...state, Positions }
}

export default { add, edit, reset, storno, onAddError, resetErrors }