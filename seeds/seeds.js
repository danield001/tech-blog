const userData = require('./userSeeds.json');
const blogData = require('./blogSeeds.json');
const commentData = require('./commentSeeds.json');

const { User, Comment, BlogPost } = require('../Models');
const sequelize = require('../config/connection');

const seedDb = async () => {
    await sequelize.sync({ force: true });
    const user = await User.bulkCreate(userData, {
        individualHooks: true,
    });
    console.log(user);
    const blogs = await BlogPost.bulkCreate(blogData);
    console.log(blogs);
    const comments = await Comment.bulkCreate(commentData);
    console.log(comments);
    process.exit(0)
}

seedDb()