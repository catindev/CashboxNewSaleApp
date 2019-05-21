export const fetchDomains = state => ({ ...state, Fetching: true });

export const onDomainsFetched = (state, { Domains }) => ({
    ...state, Domains, Fetching: false
});

export const onDomainsError = (state, action) => ({
    ...state,
    SystemErrors: [
        ...state.SystemErrors,
        'Ошибка при загрузке справочника видов деятельности'
    ],
    Fetching: false
})

export default { fetchDomains, onDomainsFetched, onDomainsError }