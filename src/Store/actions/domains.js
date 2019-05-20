export const FETCH_DOMAINS = 'FETCH_DOMAINS';
export const DOMAINS_FETCHED = 'DOMAINS_FETCHED';
export const DOMAINS_ERROR = 'DOMAINS_ERROR';

const onDomainsSuccess = Domains => ({
    type: DOMAINS_FETCHED, Domains
});
const onDomainsError = error => ({
    type: DOMAINS_ERROR, error
});



export const fetchDomains = ({ IdKkm, Token, API_URL }) => async dispatch => {
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
    }
    catch (error) {
        return dispatch(onDomainsError(error.message));
    }
};