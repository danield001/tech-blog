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

router.get('/', async (req, res) => {
    try{
        const dbPostData = await BlogPost.findAll();
        if (!dbPostData){
            res.status(400);
            res.json({ message: 'Post not Found!'});
        } else {
            res.status(200).json(dbPostData)
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/id', async (req, res) => {

})

router.put("/:post_id", (req, res) => {
    //Calls the update method on the Book model
    BlogPost.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        content: req.body.author,
        created_by_user: req.session.user_id
      },
      {
        where: {
          post_id: req.params.post_id,
        },
      }
    )
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });
  
  router.delete("/:post_id", (req, res) => {
    BlogPost.destroy({
      where: {
        post_id: req.params.post_id,
      },
    })
      .then((deletedPost) => {
        res.json(deletedPost);
      })
      .catch((err) => res.json(err));
  });