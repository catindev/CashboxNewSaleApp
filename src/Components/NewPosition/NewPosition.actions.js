import getPositionFormErrors from './getPositionFormErrors';
import calculatePositionCost from '../../Utils/CalculatePositionCost';
const { keys } = Object;


export const RESET_POSITION_ERRORS = 'Приложение сбрасывает ошибки на форме новой позиции';

/** Проверить форму позиции */
export const VALIDATE_POSITION_ERRORS = 'Приложение нашло ошибки в форме новой позиции';
export const VALIDATE_POSITION_SUCCESS = 'Приложение проверило форму новой позиции. Ошибок нет';

export const validatePositionForm = () => (dispatch, getState) => {
    const { PositionForm } = getState();
    const errors = getPositionFormErrors(PositionForm);
    return keys(errors).length > 0 ?
        { type: VALIDATE_POSITION_ERRORS, errors }
        :
        { type: VALIDATE_POSITION_SUCCESS };
};

/** Если нет ошибок, то рассчитать форму позиции */
export const POSITION_CALCULATED = 'Приложение посчитало итоги для п`озиции';

export const calculatePosition = () => (dispatch, getState) => {
    const {
        PositionForm: Position, PositionFormErrors: Errors, Sections
    } = getState();
    console.log('Errors', Errors, keys(Errors))
    if (keys(Errors).length > 0) return false;

    const { Name, Id, Nds } = Sections[Position.Section];
    const newPosition = { ...Position, SectionName: Name, IdSection: Id, Nds };
    const Cost = calculatePositionCost(newPosition);
    const NdsValue = ((Cost / ((Nds / 100) + 1)) * (Nds / 100)).toFixed(2);

    dispatch({
        type: POSITION_CALCULATED,
        Position: { ...newPosition, Cost, NdsValue }
    });
}

/** Если нет ошибок, то добавить новую позицию */
export const ADD_POSITION = 'Кассир добавил позицию в предчек';

export const addPosition = () => (dispatch, getState) => {
    const {
        PositionForm: Position,
        PositionFormErrors: Errors,
        Total
    } = getState();
    if (keys(Errors).length > 0) return false;
    const newTotal = Total + Position.Cost;
    dispatch({ type: ADD_POSITION, Position, Total: newTotal });
    // dispatch({ type: POSITION_FORM_RESET });
};


/** Изменить форму позиции */
export const EDIT_POSITION_FORM = 'Кассир вводит данные в форму новой позиции'

export const editPosition = payload => ({
    type: EDIT_POSITION_FORM, payload
});

/** Сбросить форму новой позиции */
export const POSITION_FORM_RESET = 'Форма новой позиции очищена';


