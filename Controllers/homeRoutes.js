const router = require('express').Router();
const express = require('express')
const path = require('path')

const { BlogPost, User, Comment } = require('../Models/index')

router.get('/home', async (req, res) => {
    try{
    const blogPosts = await BlogPost.findAll();
    const homeCont = blogPosts.map(blogPost => blogPost.toJSON());
    //const homeCont = postData.map((blogPost) => blogPost.get({ plain: true }));

    res.render('home', { posts: homeCont });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/dashboard', async (req, res) => {
    try {
        const user_id = req.session.user_id;

        const userPosts = await BlogPost.findAll({
            where: { created_by_user_id: user_id },
        });

        const dashCont = userPosts.map(userPost => userPost.toJSON());

        res.render('dashboard', { userPosts: dashCont });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', (red, res) => {
    res.render('home');
});

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/newPost', (req, res) => {
    res.render('post');
});

router.get('/comment', (req, res) => {
    res.render('comment');
});

module.exports = router;
