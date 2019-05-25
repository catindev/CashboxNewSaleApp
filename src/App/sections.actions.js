export const FETCH_SECTIONS = 'Приложение запрашивает справочник секций';
export const SECTIONS_FETCHED = 'Справочник секций получен';
export const SECTIONS_ERROR = 'Ошибка загрузки справочника секций';

const onSectionsSuccess = Sections => ({
    type: SECTIONS_FETCHED, Sections
});
const onSectionsError = error => ({
    type: SECTIONS_ERROR, error
});
export const fetchSections = ({ IdKkm, Token, API_URL }) => async dispatch => {
    dispatch({ type: FETCH_SECTIONS });
    try {
        const response = await fetch(
            `${API_URL}/kkms/${IdKkm}/sections`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`
                }
            });

        const { Status, Message, Data = {} } = await response.json();

        if (Status !== 200)
            return dispatch(onSectionsError(Message));

        return dispatch(onSectionsSuccess(Data.Sections));
    }
    catch (error) {
        return dispatch(onSectionsError(error.message));
    }
};