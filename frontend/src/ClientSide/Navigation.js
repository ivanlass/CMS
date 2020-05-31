import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { CategoriesContext } from '../context/categoriesContext'

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
        <div className="">
            <ul>
                <li><a onClick={props.fetchPickedCategory} data-category="all">Home</a></li>
                {categories && categories.map(category => (
                    <li key={category._id}><a onClick={props.fetchPickedCategory} data-category={category.category}>{category.category}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;
