export function fetchTodos(){
    return function (dispatch){
        let url = 'http://127.0.0.1:8000/api/tasks/'
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        let token = userToken?.access
        fetch(url,  {headers: {
          'Authorization': `Bearer ${token}`
      }
      })
            .then(res => res.json())
            .then(data => dispatch({type: 'GET_TODOS_LIST', payload: data}))
    }
}