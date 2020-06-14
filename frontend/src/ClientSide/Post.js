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
                <div className="singlepost">
                    <Link className="singlepost-home" to={"/"}>GO TO HOME</Link>
                    <div className="singlepost-hero-image" style={{
                        background: `url(http://localhost:5000/${singlePost.cover})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundOrigin: "content-box",
                        backgroundPosition: "center center"
                    }}></div>
                    <h1>{singlePost.title}</h1>
                    <p className="singlepost-post">{singlePost.post}</p>
                </div>}
        </>
    );
}

export default Post;
