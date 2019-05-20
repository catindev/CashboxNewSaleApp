import getPositionFormErrors from './getPositionFormErrors';

export const RESET_ERRORS = 'RESET_ERRORS';

/** Проверить рассчитать и добавить позицию в стейт */
export const ADD_POSITION = 'ADD_POSITION';
export const ADD_POSITION_ERROR = 'ADD_POSITION_ERROR';
export const addPosition = Position => {
    const errors = getPositionFormErrors(Position);
    return (Object.keys(errors)).length > 0 ?
        { type: ADD_POSITION_ERROR, errors }
        :
        { type: ADD_POSITION, Position }
};


/** Изменить форму позиции */
export const EDIT_POSITION = 'EDIT_POSITION'
export const editPosition = (newData) => ({
    type: EDIT_POSITION, payload: newData
});

/** Сбросить форму новой позиции */
export const POSITION_FORM_RESET = 'POSITION_FORM_RESET'
export const positionFormReset = index => ({
    type: POSITION_FORM_RESET, index
});

/** Сторнировать позицию */
export const TOGGLE_POSITION_STORNO = 'TOGGLE_POSITION_STORNO'
export const toggleStorno = index => ({
    type: TOGGLE_POSITION_STORNO, index
});


