const router = require('express').Router()
const Posts = require('../models/post.model')




router.route('/').get((req, res) => {
    Posts.find()
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error:' + err))
})






router.route('/add').post((req, res) => {
    const title = req.body.title
    const post = req.body.post
    const category = req.body.category
    const newPost = new Posts({
        title,
        post,
        category
    })

    newPost.save()
    Posts.find()
        .then(post => res.json(post))
        .catch(err => res.status(400).json('Error:' + err))
})





router.route('/:id').get((req, res) => {
    Posts.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json('error:' + err))
})






router.route('/:id').delete((req, res) => {
    Posts.findByIdAndDelete(req.params.id)
        .then(() => {
            Posts.find()
                .then(posts => res.json(posts))
                .catch(err => res.status(400).json('err' + err))
        })
        .catch(err => res.status(400).json('error:' + err))
})




router.route('/update/:id').post((req, res) => {
    Posts.findById(req.params.id)
        .then(post => {
            post.title = req.body.title
            post.post = req.body.post
            post.category = req.body.category
            post.date = Date.now

            post.save()
                .then((post) => res.json(post))
                .catch(err => res.status(400).json('error:' + err))
        })
        .catch(err => res.status(400).json('error:' + err))
})

module.exports = router