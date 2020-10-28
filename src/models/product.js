module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
  name: {
  type: DataTypes.STRING,
  allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  });
  
  Product.associate = (models) => {
  // associations can be defined here
  Product.belongsTo(models.Category, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',

  });
  };
  return Product;
  };