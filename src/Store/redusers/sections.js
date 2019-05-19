export const fetchItems = state => ({ ...state, Fetching: true });

export const onFetched = (state, action) => ({
    ...state,
    Sections: action.Sections,
    Fetching: false
});

export const onError = (state, action) => ({
    ...state,
    SectionsError: 'Не удалось загрузить справочник',
    Fetching: false
})

export default { fetchItems, onFetched, onError }