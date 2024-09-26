const { DataTypes } = require('sequelize');
const sequelize = require('../config/configConnection');
const User = require('./user');  

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,  
      key: 'id',    
    }
  }
});


User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = Post;
