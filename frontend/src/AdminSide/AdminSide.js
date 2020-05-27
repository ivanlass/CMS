import React, { useContext } from 'react';
import AdminPanel from './AdminPanel'
import Login from './Login';
import { UserContext } from '../context/userContext'

function AdminSide(props) {
    const [user, setUser] = useContext(UserContext);
    return (
        <div className="App">
            {1 ?
                <AdminPanel />
                :
                <Login loginHandler={props.loginHandler} setUsername={props.setUsername} setPassword={props.setPassword} />
            }
        </div>
    );
}

export default AdminSide;
