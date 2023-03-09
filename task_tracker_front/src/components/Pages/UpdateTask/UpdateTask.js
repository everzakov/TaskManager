import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "../../../asyncActions/getTodos";
import {refreshTask} from "../../../asyncActions/refreshTask";
import "./UpdateTask.css"

const UpdateTask = () => {
    fetchTodos()
    const { id } = useParams();
    let todos = useSelector(store => store.todos)
    todos = todos.filter(x => x.id == id);
    const dispatch = useDispatch()

    const getStatuses = () => {
        fetch('http://127.0.0.1:8000/api/tasks/statuses/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(data => data.json())
            .then(data => {
                    console.log(data.statuses)
                    setStatuses(data.statuses)
                    setStatus(status)
                }
            )
    }

    const onChange = (e) => {
        const val = e.target.value;
        e.preventDefault();
        setStatus(val)
    }

    useEffect(() => {
        getStatuses()
        dispatch(fetchTodos())
    }, [dispatch, id])

    let [title, setTitle] = useState();
    let [description, setDescription] = useState();
    let [status, setStatus] = useState("");
    let [statuses, setStatuses] = useState([]);
    let [date, setDate] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        // eslint-disable-next-line array-callback-return
        todos.map(elem => {
            if (typeof title === "undefined") {title = elem.name}
            if (typeof description === "undefined") {description = elem.description}
            if (typeof status === "undefined") {status = elem.status}
            if (typeof date === "undefined") {date = elem.date}
        })
        await refreshTask({
            task_id: id,
            title,
            description,
            status,
            date,
        }, id);
        navigate(`/todos/${id}`);
    }

    return (
        <div className="update_task_wrapper">
            {todos.map(elem=> {
return (            <form className={"form_wrapper"} onSubmit={handleSubmit}>
                <label>
                    <p>Name:</p>
                    <input type="name" onChange={e => setTitle(e.target.value)} defaultValue={`${elem.name}`}/>
                </label>
                <label>
                    <p>Description:</p>
                    <input type="description" onChange={e => setDescription(e.target.value)} defaultValue={`${elem.description}`}/>
                </label>
                <label>
                    <p>Status:</p>
                    <select name="status" defaultValue={elem.status }  multiple={false} onChange={e => onChange(e)}>
                        {statuses.map((item, _) => (
                            <option value={item[0]}>{item[1]}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <p>Date:</p>
                    <input type="date" onChange={e => setDate(e.target.value)} defaultValue={`${elem.date}`}/>
                </label>
                <div>
                    <button id={"sub_button"} type="submit">Save changes</button>
                </div>
            </form>
            )})}
        </div>
    );
};

export default UpdateTask;