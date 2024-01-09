const router = require('express').Router();
const { Comment } = require('../../Models');

router.post('/submit', async (req, res) => {
    try{
        const dbCommentData = await Comment.create({
            comment_content: req.body.comment_content,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });

        res.status(200).json(dbCommentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

