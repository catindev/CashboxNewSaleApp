import getErrors from './getErrors';

export const PRECHECK_SAVE = 'Кассир сохранил предчек';
export const PRECHECK_SAVED = 'Предчек сохранён в базе данных';
export const PRECHECK_ERRORS = 'Кассир попытался сохранить предчек с ошибками';
export const PRECHECK_SAVE_ERRORS = 'Ошибка сохранения предчека в базу данных';
// export const PRECHECK_RESET_ERRORS = 'Приложение сбрасывает ошибки с формы сохранения предчека';

const onPrecheckSuccess = Data => ({
    type: PRECHECK_SAVED
});
const onPrecheckError = error => ({
    type: PRECHECK_SAVE_ERRORS, error
});

export const validateAndSavePrecheck = API_URL => async (dispatch, getState) => {
    const PrecheckErrors = getErrors(getState());

    if (PrecheckErrors.length > 0) return dispatch({
        type: PRECHECK_ERRORS,
        PrecheckErrors
    });

    dispatch({ type: PRECHECK_SAVE });
    try {
        const { Token, IdDomain, Cash, NonCash, Positions, Total } = getState();

        const response = await fetch(`${API_URL}/operations/sales`, {
            method: 'post',
            body: JSON.stringify({ IdDomain, Positions, Cash, NonCash, Total }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            }
        });

        const { Status, Message, Data = {} } = await response.json();

        if (Status !== 200)
            return dispatch(onPrecheckError(Message));

        return dispatch(onPrecheckSuccess(Data));
    } catch (error) {
        return dispatch(onPrecheckError(error.message));
    }
};