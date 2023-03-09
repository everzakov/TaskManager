export async function addTask(credentials) {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    let token = userToken?.access

    return fetch('http://127.0.0.1:8000/api/task/create/', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}