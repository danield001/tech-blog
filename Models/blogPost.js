const { Model, DataTypes } = require("sequelize");
const sequelizeInstance = require("../config/connection");

class BlogPost extends Model {}

BlogPost.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_by_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        created_by_username: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'username'
            },
        },
        date_created: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeInstance,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogPost'
    }
);

module.exports = BlogPost;
