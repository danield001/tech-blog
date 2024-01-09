const User = require('./User');
const BlogPost = require('./blogPost');
const Comment = require('./Comment');


Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id',
});

BlogPost.belongsTo(User, {
    foreignKey: 'created_by_user_id',
});

module.exports = { User, BlogPost, Comment };
