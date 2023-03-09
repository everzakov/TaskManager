export async function refreshToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    return fetch('http://127.0.0.1:8000/auth/token/refresh/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({refresh: userToken?.refresh})
    })
        .then(data => data.json())
        .then(data => {
            console.log(userToken.refresh)
            console.log(data.access)
            console.log(userToken.refresh === data.access)
            localStorage.setItem('token', JSON.stringify(data));
         })
}