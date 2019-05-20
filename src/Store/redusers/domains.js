export const fetchDomains = state => ({ ...state, Fetching: true });

export const onDomainsFetched = (state, action) => ({
    ...state,
    Domains: action.Domains,
    Fetching: false
});

export const onDomainsError = (state, action) => ({
    ...state,
    Errors: {
        ...state.SystemErrors,
        Domain: 'Не удалось загрузить справочник видов деятельности'
    },
    Fetching: false
})

export default { fetchDomains, onDomainsFetched, onDomainsError }