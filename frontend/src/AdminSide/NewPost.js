import React, { useState, useContext } from 'react';
import axios from 'axios';
import { PostsContext } from '../context/postsContext'


function NewPost(props) {
    const [posts, setPosts] = useContext(PostsContext)
    const [title, setTitle] = useState()
    const [post, setPost] = useState()

    const addNewPost = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:5000/posts/add',
            data: { title, post }
        })
            .then(response => setPosts(response.data))
            .catch(error => console.log(error))

    }

    return (
        <div className="App">
            <form onSubmit={addNewPost}>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <textarea type="password" onChange={(e) => setPost(e.target.value)} />
                <textarea type="password" onChange={(e) => setPost(e.target.value)} />
                <button type="submit">New post</button>
            </form>
        </div>
    );
}

export default NewPost;
