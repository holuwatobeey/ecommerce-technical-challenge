module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
  name: {
  type: DataTypes.STRING,
  allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  role: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    },
  });
  
  // User.associate = (models) => {
  // // associations can be defined here
  // User.hasMany(models.Category, {
  // foreignKey: 'categoryId',
  // });
  // };
  return User;
  };