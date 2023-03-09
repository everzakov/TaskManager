import React, {useEffect, useState} from 'react';
import {addTask} from "../../../asyncActions/addTask";

import "./AddTask.css"
import {useNavigate} from "react-router-dom";


const AddTask = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [status, setStatus] = useState();
    const [date, setDate] = useState();
    const [statuses, setStatuses] = useState([]);

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
                    setStatus(data.statuses[0][0])
                }
            )
    }

    useEffect(() => {
        getStatuses()
    }, [])

    const navigate = useNavigate();


    const handleSubmit = async e => {
        e.preventDefault();
        const task_id= Date.now()
        await addTask({
            task_id,
            title,
            description,
            status,
            date,
        });
        navigate("/todos")
    }

    return (
        <div className="add_task_wrapper">
            <h1>Add task</h1>
            <form className={"form_wrapper"} onSubmit={handleSubmit}>
                <label>
                    <p>Name:</p>
                    <input type="name" onChange={e => setTitle(e.target.value)}/>
                </label>
                <label>
                    <p>Description:</p>
                    <input type="description" onChange={e => setDescription(e.target.value)}/>
                </label>
                <label>
                    <p>Status:</p>
                    <select name="status" defaultValue={status}  multiple={false} onChange={e => setStatus(e.target.value)}>
                        {statuses.map((item, _) => (
                            <option value={item[0]}>{item[1]}</option>
                        ))}
                    </select>
                </label>
                <label>
                    <p>Date:</p>
                    <input type="date" onChange={e => setDate(e.target.value)}/>
                </label>
                <div>
                    <button className={"sub_button"} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;