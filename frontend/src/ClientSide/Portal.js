import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation'
import PostList from './PostList'
import { PostsContext } from '../context/postsContext'
import './client.css'


function Portal() {
    const [pickedCategory, setPickedCategory] = useState("all")
    const [posts, setPosts] = useContext(PostsContext)
    const [filteredPosts, setFilteredPosts] = useState([])


    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/posts'
        })
            .then(response => {
                setPosts(response.data)
                setFilteredPosts(response.data)
            })
            .catch(error => console.log(error))
    }, [])


    const fetchPickedCategory = (e) => setPickedCategory(e.currentTarget.dataset.category)

    //filtering posts based on category that user choose and returning to filteredPosts
    useEffect(() => {
        let filteredPosts;
        if (pickedCategory === "all") {
            filteredPosts = (posts)
        } else {
            filteredPosts = posts && posts.filter(post => post.category === pickedCategory)
        }
        setFilteredPosts(filteredPosts)
    }, [pickedCategory])

    return (
        <div>
            <Navigation fetchPickedCategory={fetchPickedCategory} />
            {filteredPosts != undefined && filteredPosts.length > 0 ? < PostList filteredPosts={filteredPosts} /> : null}
        </div>
    );
}

export default Portal;
