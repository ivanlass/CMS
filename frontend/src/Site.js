import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminSide from './AdminSide/AdminSide'
import Portal from './ClientSide/Portal'
import SinglePost from './AdminSide/SinglePost'
import { UserContext } from './context/userContext'

function Site() {
    const [user, setUser] = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const loginHandler = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:5000/users/login',
            data: { username, password }
        })
            .then(response => setUser(response.data[0]))
            .catch(error => console.log(error))

    }

    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/admin">
                            <AdminSide loginHandler={loginHandler} user={user} setUsername={setUsername} setPassword={setPassword} />
                        </Route>

                        <Route exact path="/">
                            <Portal />
                        </Route>
                        <Route exact path="/admin/post/edit/:id" component={SinglePost} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Site;
