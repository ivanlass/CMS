import React from 'react';


function PostList({ filteredPosts }) {




    return (
        <div className="App">
            {filteredPosts && filteredPosts.map(post => (
                <>
                    <div style={{ background: `url(http://localhost:5000/${post.cover})` }}>
                        <h1>{post.title}</h1>
                        <p>{post.category}</p>
                    </div>
                </>
            ))}
        </div>
    );
}

export default PostList;
