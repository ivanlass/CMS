
import React, { useState, createContext } from 'react'


export const PostsContext = createContext()


export const PostsProvider = (props) => {
    const [posts, setPosts] = useState()
    const [singlePosts, setSinglePosts] = useState()
    return (
        <PostsContext.Provider value={[posts, setPosts, singlePosts, setSinglePosts]}>
            {props.children}
        </PostsContext.Provider>
    )
}