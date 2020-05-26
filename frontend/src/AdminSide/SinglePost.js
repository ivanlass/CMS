import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SinglePost(props) {
    const [title, setTitle] = useState(props.title)
    const [post, setPost] = useState(props.post)

    const submitChanges = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: `http://localhost:5000/posts/update/${props.id}`,
            data: { title, post }
        })
            .then(response => {
                props.fetchDataAfterEdit()
            })
    }

    return (
        < div className="" >
            <form onSubmit={submitChanges}>
                <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
                <textarea value={post} onChange={e => setPost(e.target.value)} />
                <button onClick={props.closeModal}>CANCEL</button>
                <button type="submit">SUBMIT</button>
            </form>
        </div >
    );
}

export default SinglePost;
