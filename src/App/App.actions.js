
export const PRECHECK_VALIDATE = 'Приложение проверяет предчек';
export const PRECHECK_SAVE = 'Кассир сохранил предчек';
export const PRECHECK_SAVED = 'Предчек сохранён';
export const PRECHECK_ERRORS = 'Ошибки проверки предчека';
export const PRECHECK_SAVE_ERRORS = 'Ошибки сохранения предчека';
export const PRECHECK_RESET_ERRORS = 'Приложение сбрасывает ошибки с формы сохранения предчека';

const getPrecheckErrors = () => ({})
export const precheckValidate = state => {
    const errors = getPrecheckErrors(state);
    return Object.keys(errors).length > 0 ?
        { type: PRECHECK_ERRORS, errors }
        :
        precheckSave(state);
}

const onPrecheckSuccess = () => ({
    type: PRECHECK_SAVED
});
const onPrecheckError = error => ({
    type: PRECHECK_SAVE_ERRORS, error
});

const precheckSave = state => async dispatch => {
    dispatch({ type: PRECHECK_SAVE });
    try {
        const { Token, API_URL } = state;
        const body = {}; // TODO: собрать предчек на отправку

        const response = await fetch(`${API_URL}/operations/sales`, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            }
        });

        const { Status, Message, Data = {} } = await response.json();

        if (Status !== 200)
            return dispatch(onPrecheckError(Message));

        return dispatch(onPrecheckSuccess());
    } catch (error) {
        return dispatch(onPrecheckError(error.message));
    }
};