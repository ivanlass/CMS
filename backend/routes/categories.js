const router = require('express').Router()
const Category = require('../models/category.model')




router.route('/').get((req, res) => {
    Category.find()
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error:' + err))
})






router.route('/add').post((req, res) => {
    const category = req.body.category
    const newCategory = new Category({ category })

    newCategory.save()
    Category.find()
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error:' + err))
})






router.route('/:id').delete((req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(() => {
            Category.find()
                .then(posts => res.json(posts))
                .catch(err => res.status(400).json('err' + err))
        })
        .catch(err => res.status(400).json('error:' + err))
})



module.exports = router