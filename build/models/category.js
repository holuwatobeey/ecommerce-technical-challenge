'use strict';

module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Product, {
      foreignKey: 'categoryId'
    });
  };
  return Category;
};
//# sourceMappingURL=category.js.map