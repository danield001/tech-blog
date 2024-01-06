const User = require('./User');
const BlogPost = require('./blogPost');
const Comment = require('./Comment');
const { FOREIGNKEYS } = require('sequelize/types/query-types');


Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, BlogPost, Comment };
