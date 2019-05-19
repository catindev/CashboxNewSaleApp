export const FETCH_SECTIONS = 'FETCH_SECTIONS';
export const SECTIONS_FETCHED = 'SECTIONS_FETCHED';
export const SECTIONS_ERROR = 'SECTIONS_ERROR';

const onSectionsSuccess = Sections => ({
    type: SECTIONS_FETCHED, Sections
});
const onSectionsError = error => ({
    type: SECTIONS_ERROR, error
});

const Fake = [
    {
        "Id": 0,
        "Name": "Секцыя 1",
        "Nds": true
    },

    {
        "Id": 1,
        "Name": "Товары с НДС",
        "Nds": true
    },

    {
        "Id": 2,
        "Name": "Товары без НДС",
        "Nds": false
    }
]

export const fetchSections = ({ IdKkm, Token }) => async dispatch => {
    dispatch({ type: FETCH_SECTIONS });
    try {
        const response = await fetch('https://httpbin.org/get');
        await response.json();
        return dispatch(onSectionsSuccess(Fake));
    }
    catch (error) {
        return dispatch(onSectionsError(error));
    }
};