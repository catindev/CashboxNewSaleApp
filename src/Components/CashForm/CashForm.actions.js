
export const EDIT_CASH_FORM = 'Кассир заполняет сумму внесённых денег';

export const editCashForm = ({ value, name }) => (dispatch, getState) => {
    const { Total } = getState();
    const Cash = name === 'Cash' ? value : getState().Cash;
    const NonCash = name === 'NonCash' ? value : getState().NonCash;
    const Change = Cash > 0 && Total > 0 ?
        (Cash + NonCash) > Total ? (Cash + NonCash) - Total : 0
        : 0
    dispatch({ type: EDIT_CASH_FORM, Cash, NonCash, Change });
}