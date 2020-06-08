import React, { useContext, useEffect } from 'react';
import './client.css'
import axios from 'axios';
import { PostsContext } from '../context/postsContext'
import { Link } from "react-router-dom";


function Post(props) {
    const [singlePost, setSinglePost] = useContext(PostsContext)

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:5000/posts/${props.match.url.substr(1)}`,
        })
            .then(response => setSinglePost(response.data))
            .catch(error => console.log(error))



    }, [])

    return (
        <>
            {singlePost &&
                <div >
                    <Link to={"/"}>asd</Link>
                    <p>rtyrty</p>
                    {/* <div style={{ background: `url(${singlePost.cover})` }}></div>
            <h1>{singlePost.title}</h1> */}
                </div>}
        </>
    );
}

export default Post;
