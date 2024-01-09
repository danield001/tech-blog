const router = require('express').Router();
const { BlogPost } = require('../../Models');

router.post('/submit', async (req, res) => {
    try {
        const dbPostData = await BlogPost.create({
            title: req.body.title,
            content: req.body.content,
            created_by_user_id: req.session.user_id,
        });

        res.status(200).json(dbPostData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const dbPostData = await BlogPost.findAll();
        if (!dbPostData) {
            res.status(400);
            res.json({ message: 'Post not Found!' });
        } else {
            res.status(200).json(dbPostData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:post_id', (req, res) => {
    // Your PUT route logic here
});

router.delete('/:post_id', (req, res) => {
    // Your DELETE route logic here
});

module.exports = router;
