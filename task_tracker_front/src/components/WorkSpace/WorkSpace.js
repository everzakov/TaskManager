import React from 'react';
import "./WorkSpace.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Todos from "../Pages/Todos/Todos";
import Login from "../Pages/Login/Login";
import Todo from "../Pages/Todo/Todo";
import NotFound from "../Pages/NotFound/NotFound";
import useToken from "../../asyncActions/useToken";
import AddTask from "../Pages/AddTask/AddTask";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";

const WorkSpace = () => {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <div className={"workspace_wrapper"}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/auth'} element={<Login setToken={setToken}/>}/>
                    <Route path={'/todos/:id'} element={<Todo/>}/>
                    <Route path={'/todos/add'} element={<AddTask/>}/>
                    <Route path={'/todos/change/:id'} element={<UpdateTask/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default WorkSpace;