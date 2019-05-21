export const fetchSessions = state => ({ ...state, Fetching: true });

export const onSessionsFetched = (state, { Sections }) => ({
    ...state, Sections, Fetching: false
});

export const onSessionsError = (state, action) => ({
    ...state,
    SystemErrors: [
        ...state.SystemErrors,
        'Не удалось загрузить справочник секций'
    ],
    Fetching: false
})

export default { fetchSessions, onSessionsFetched, onSessionsError }