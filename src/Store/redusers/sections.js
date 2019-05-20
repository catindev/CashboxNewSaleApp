export const fetchSessions = state => ({ ...state, Fetching: true });

export const onSessionsFetched = (state, action) => ({
    ...state,
    Sections: action.Sections,
    Fetching: false
});

export const onSessionsError = (state, action) => ({
    ...state,
    Errors: {
        ...state.Errors,
        Section: 'Не удалось загрузить справочник секций'
    },
    Fetching: false
})

export default { fetchSessions, onSessionsFetched, onSessionsError }