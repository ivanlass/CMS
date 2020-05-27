import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { CategoriesContext } from '../context/categoriesContext'

function Categories(props) {
    const [categories, setCategories] = useContext(CategoriesContext)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/categories',
        })
            .then(response => setCategories(response.data))
            .catch(error => console.log(error))



    }, [])
    return (
        <div>
            <select required={true} onClick={props.getCategory}>
                <option value="">Odaberi kategoriju</option>
                {categories && categories.map(category => (
                    <option selected={category.category === props.categoryOfPost} key={category._id} value={category.category}>{category.category}</option>
                ))}
            </select>
        </div >
    );
}

export default Categories;
