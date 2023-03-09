import React, {useEffect} from 'react';
import "./Todos.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "../../../asyncActions/getTodos";

const Todos = () => {
    const todos = useSelector(store => store.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div className={"todos_page"}>
            {todos.map(elem =>
                <div className={"todos_el_wrapper"} key={elem.id}>
                    <a className={"todos_el"} href={`/todos/${elem.id}`}>{elem.name}</a>
                </div>
            )}
        </div>
    );
};

export default Todos;