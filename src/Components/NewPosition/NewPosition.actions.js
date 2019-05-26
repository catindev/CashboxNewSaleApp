import getPositionFormErrors from './getPositionFormErrors';
import calculatePositionCost from '../../Utils/CalculatePositionCost';

export const ADD_POSITION_BUTTON = 'Кассир добавляет позицию в предчек';
export const RESET_POSITION_ERRORS = 'Приложение сбрасывает ошибки на форме новой позиции';

/** Проверить рассчитать и добавить позицию в стейт */
export const CALCULATE_AND_ADD_POSITION = 'Приложение проверило, рассчитало и добавило новую позицию в предчек';
export const ADD_POSITION_ERROR = 'Найдены ошибки при добавлении позиции';

export const addPosition = () => (dispatch, getState) => {
    const { PositionForm, Total, Sections } = getState();

    const errors = getPositionFormErrors(PositionForm);
    if (Object.keys(errors).length > 0) return dispatch({
        type: ADD_POSITION_ERROR, errors
    });

    const { Name, Id, Nds } = Sections[PositionForm.Section];

    const Cost = calculatePositionCost(PositionForm);
    const NdsValue = ((Cost / ((Nds / 100) + 1)) * (Nds / 100)).toFixed(2);
    const newTotal = Total + Cost;
    const Position = {
        ...PositionForm,
        SectionName: Name, IdSection: Id,
        Nds, NdsValue,
        Cost
    };

    dispatch({
        type: CALCULATE_AND_ADD_POSITION,
        Position,
        Total: newTotal
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


