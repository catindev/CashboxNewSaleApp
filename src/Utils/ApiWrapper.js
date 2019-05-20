export default ApiRequest = async ({ url, body, Token }) => {
    const response = await fetch(
        `${API_URL}/kkms/${IdKkm}/sections`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            }
        });
}