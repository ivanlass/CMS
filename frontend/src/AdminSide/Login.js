import React from 'react';
import { Link } from 'react-router-dom';



function Login(props) {


    return (
        <div className="App">
            <form onSubmit={props.loginHandler}>
                <input type="text" onChange={(e) => props.setUsername(e.target.value)} />
                <input type="password" onChange={(e) => props.setPassword(e.target.value)} />
                <button type="submit">LOG IN</button>
            </form>
        </div>
    );
}

export default Login;
