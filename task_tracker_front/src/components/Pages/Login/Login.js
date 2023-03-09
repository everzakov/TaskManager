import React, {useState} from 'react';
import "./Login.css"
import PropTypes from 'prop-types';
import {loginUser} from "../../../asyncActions/loginUser";
import { useNavigate } from "react-router-dom";
import {refreshToken} from "../../../asyncActions/refreshToken";

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    let navigate = () => {}
    if (userToken) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        navigate = useNavigate()
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        setTimeout(refreshToken, 1000*60*3)
        navigate("/")
    }

    return(
        <div className="login_wrapper">
            <h1>Login</h1>
            <form className={"form_wrapper"} onSubmit={handleSubmit}>
                <label>
                    <p>Username:</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password:</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button className={"sub_button"} type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}