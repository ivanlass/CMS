import React from 'react';
import './client.css'
import { Link } from "react-router-dom";




function PostList({ filteredPosts }) {



    return (
        <div className="grid-container">
            {filteredPosts && filteredPosts.map(post => (
                <Link to={`/${post._id}`} >
                    <div className="post">
                        <div className="cover" style={{
                            background: `url(http://localhost:5000/${post.cover})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundOrigin: "content-box",
                            backgroundPosition: "center center"
                        }}>
                            <div className="title-wrapper">
                                <h1>{post.title}</h1>
                                <p>{post.category}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
            }
        </div >
    );
}

export default PostList;
