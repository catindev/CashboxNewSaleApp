export const FETCH_DOMAINS = 'Приложение запрашивает справочник видов деятельности';
export const DOMAINS_FETCHED = 'Справочник видов деятельности получен';
export const DOMAINS_ERROR = 'Ошибка загрузки справочника видов деятельности';
export const CHANGE_DOMAIN = 'Кассир изменил вид деятельности';

const onDomainsSuccess = Domains => ({
    type: DOMAINS_FETCHED, Domains
});
const onDomainsError = error => ({
    type: DOMAINS_ERROR, error
});
export const onDomainChange = Domain => ({
    type: CHANGE_DOMAIN, Domain
});
export const fetchDomains = ({ Token, API_URL }) => async dispatch => {
    dispatch({ type: FETCH_DOMAINS });
    try {
        const response = await fetch(
            `${API_URL}/directories/domains`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`
                }
            });
        const { Status, Message, Data = {} } = await response.json();

        if (Status !== 200)
            return dispatch(onDomainsError(Message));

        return dispatch(onDomainsSuccess(Data.Domains));
    } catch (error) {
        return dispatch(onDomainsError(error.message));
    }
};