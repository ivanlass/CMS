import React, { useState } from 'react';
import PostsList from './PostsList'
import NewPost from './NewPost'

function AdminPanel(props) {
    const [modal, setModal] = useState(false)

    return (
        <div className="App">
            <button onClick={() => setModal(!modal)}>+</button>
            {modal && <NewPost />}
            <PostsList />

        </div>
    );
}

export default AdminPanel;
