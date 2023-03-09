export async function refreshTask(credentials, id) {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    let token = userToken?.access

    return fetch(`http://127.0.0.1:8000/api/task/${id}/`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}