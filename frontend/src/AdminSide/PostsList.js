import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';
import { PostsContext } from '../context/postsContext'

function PostsList(props) {
    const [posts, setPosts] = useContext(PostsContext)
    const [id, setId] = useState()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/posts'
        })
            .then(response => setPosts(response.data))
            .catch(error => console.log(error))
    }, [])
    console.log(posts)
    const deletePost = (e) => {
        e.preventDefault()
        axios({
            method: 'delete',
            url: `http://localhost:5000/posts/${e.target.value}`,
        })
            .then(response => setPosts(response.data))
            .catch(error => console.log(error))
    }


    const fetchDataAfterEdit = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/posts'
        })
            .then(response => setPosts(response.data))
            .catch(error => console.log(error))
        setId('')
    }

    const closeModal = () => setId('')

    return (
        <div className="">
            {posts && posts.map(post => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.post}</p>
                    <img style={{ width: 100 }} src={`http://localhost:5000/${post.cover}`}></img>
                    <button onClick={deletePost} value={post._id}>DELETE</button>
                    <button onClick={() => setId(post._id)}>EDIT</button>
                    {id === post._id && <SinglePost category={post.category} closeModal={closeModal} title={post.title} post={post.post} fetchDataAfterEdit={fetchDataAfterEdit} id={post._id} />}
                </div>
            ))}
        </div>
    );
}

export default PostsList;
