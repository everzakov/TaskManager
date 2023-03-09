const defaultState = []

export const todosReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'GET_TODOS_LIST':
            let todos_list = action.payload.map(elem => ({
                id: elem.task_id,
                name: elem.title,
                description: elem.description,
                status: elem.status,
                date: elem.date,
            }))
            return [...todos_list]
        default:
            return state
    }
}