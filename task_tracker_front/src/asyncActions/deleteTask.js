export async function deleteTask(id) {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    let token = userToken?.access

    return fetch(`http://127.0.0.1:8000/api/task/${id}/`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
}