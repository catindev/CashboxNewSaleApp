

/** Проверить рассчитать и добавить позицию в стейт */
export const ADD_POSITION = 'ADD_POSITION'
export const addPosition = Position => ({
    type: ADD_POSITION, Position
});


/** Изменить форму позиции */
export const EDIT_POSITION = 'EDIT_POSITION'
export const editPosition = (newData) => ({
    type: EDIT_POSITION, payload: newData
});

