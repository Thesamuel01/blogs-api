'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  // Category.associate = (models) => {
  //   User.hasMany(models.PostCategory,
  //     { foreignKey: 'categoryId', as: 'categories'});
  // };

  return Category;
};
