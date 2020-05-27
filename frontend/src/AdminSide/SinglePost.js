import React, { useState } from 'react';
import axios from 'axios';
import Categories from './Categories';


function SinglePost(props) {
    const [title, setTitle] = useState(props.title)
    const [post, setPost] = useState(props.post)
    const [category, setCategory] = useState(props.category)

    const submitChanges = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: `http://localhost:5000/posts/update/${props.id}`,
            data: { title, post, category }
        })
            .then(response => {
                props.fetchDataAfterEdit()
            })
    }

    const getCategory = e => { setCategory(e.target.value) }

    return (
        < div className="" >
            <form onSubmit={submitChanges}>
                <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
                <textarea value={post} onChange={e => setPost(e.target.value)} />
                <Categories categoryOfPost={props.category} getCategory={getCategory} />
                <button onClick={props.closeModal}>CANCEL</button>
                <button type="submit">SUBMIT</button>
            </form>
        </div >
    );
}

export default SinglePost;
