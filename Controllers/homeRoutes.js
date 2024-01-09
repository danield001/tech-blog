const router = require('express').Router();
const express = require('express')
const path = require('path')

const { BlogPost, User, Comment } = require('../Models/index')

router.get('/home', async (req, res) => {
    try{
    const blogPosts = await BlogPost.findAll();
    const homeCont = blogPosts.map(blogPost => blogPost.toJSON());

    res.render('home', { posts: homeCont });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/newPost', (req, res) => {
    res.render('post');
});
