import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { CategoriesContext } from '../context/categoriesContext'
import './client.css'


function Navigation(props) {
    const [categories, setCategories] = useContext(CategoriesContext)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/categories'
        })
            .then(response => setCategories(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div >
            <ul className="nav">
                <li className="nav-item" onClick={props.fetchPickedCategory} data-category="all">Home</li>
                {categories && categories.map(category => (
                    <li className="nav-item" key={category._id} onClick={props.fetchPickedCategory} data-category={category.category}>{category.category}</li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;
