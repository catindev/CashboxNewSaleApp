import getPositionFormErrors from './getPositionFormErrors';
import calculatePositionCost from '../../Utils/CalculatePositionCost';

export const RESET_POSITION_ERRORS = 'Приложение сбрасывает ошибки на форме новой позиции';

/** Проверить рассчитать и добавить позицию в стейт */
export const ADD_POSITION = 'Кассир добавил позицию в предчек';
export const ADD_POSITION_ERROR = 'Найдены ошибки при добавлении позиции';

export const validatePositionForm = Position => {
    const errors = getPositionFormErrors(Position);
    return Object.keys(errors).length > 0 ?
        { type: ADD_POSITION_ERROR, errors }
        :
        calculateAndAddPosition(Position);
};

export const calculateAndAddPosition = Position => (dispatch, getState) => {
    const { Name, Id, Nds } = getState().Sections[Position.Section];

    const newPosition = { ...Position, SectionName: Name, IdSection: Id, Nds };

    const Cost = calculatePositionCost(newPosition);
    const NdsValue = ((Cost / ((Nds / 100) + 1)) * (Nds / 100)).toFixed(2);

    dispatch({
        type: ADD_POSITION,
        Position: { ...newPosition, Cost, NdsValue },
        Total: getState().Total += Cost
    });
};


/** Изменить форму позиции */
export const EDIT_POSITION_FORM = 'Кассир вводит данные в форму новой позиции'
export const editPosition = (newData) => ({
    type: EDIT_POSITION_FORM, payload: newData
});

/** Сбросить форму новой позиции */
export const POSITION_FORM_RESET = 'Кассир сбрасывает форму новой позиции'
export const positionFormReset = index => ({
    type: POSITION_FORM_RESET, index
});

/** Сторнировать позицию */
export const TOGGLE_POSITION_STORNO = 'Кассир сторнирует позицию в предчеке'
export const toggleStorno = index => ({
    type: TOGGLE_POSITION_STORNO, index
});


