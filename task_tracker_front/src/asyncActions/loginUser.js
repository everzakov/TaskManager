export async function loginUser(credentials) {
    return fetch('http://127.0.0.1:8000/api/auth/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}