const router = require('express').Router();
const { BlogPost } = require('../../Models');

router.post('/submit', async (req, res) => {
    try{
    const dbPostData = await BlogPost.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
    });
    
    res.status(200).json(dbPostData);
} catch {
    res.status(400).json(err);
}
});

router.get('/', async (req,res) => {
    try{
        const dbPostData = await BlogPost.findAll();
        if (!dbPostData){
            res.status(400);
            res.json({ message: 'Post not Found!'});
        }
    }
})