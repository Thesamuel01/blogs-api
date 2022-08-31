const boom = require('@hapi/boom');
const { Op } = require('sequelize');

const { BlogPost, Category, PostCategory, User, sequelize } = require('../database/models');

const checkCategoriesIds = async (categories) => Promise.all(
  categories.map(async (id) => Category.findByPk(id)),
).then((values) => {
  const hasCategoryNotFound = values.some((value) => !value);

  if (hasCategoryNotFound) throw boom.badRequest('"categoryIds" not found');
});

const createPost = async ({ title, content, categoryIds }, userId) => {
  await checkCategoriesIds(categoryIds);

  const result = await sequelize.transaction(async (transaction) => {
    const postCreated = await BlogPost.create({ title, content, userId }, { transaction });

    await PostCategory.bulkCreate(
      categoryIds.map((categoryId) => ({ postId: postCreated.id, categoryId })),
      { transaction },
    );
    
    return postCreated;
  });

  return result;
};

const getAllPosts = async () => {
  const posts = BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const getPost = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) throw boom.notFound('Post does not exist');

  return post;
};

const checkPostOwner = async (postId, userId) => {
  const { userId: postOwner } = await getPost(postId);

  if (postOwner !== userId) throw boom.unauthorized('Unauthorized user');
};

const updatePost = async ({ id, title, content }, userId) => {
  await checkPostOwner(id, userId);

  await sequelize.transaction(async (transaction) => {
    await BlogPost.update(
      { title, content },
      { where: { id } },
      { transaction },
    );
  });

  const postUpdated = await getPost(id);

  return postUpdated;
};

const deletePost = async (postId, { id: userId }) => {
  await checkPostOwner(postId, userId);

  await sequelize.transaction(async (transaction) => {
    BlogPost.destroy({
      where: { id: postId },
    },
    { transaction });
  });
};

const searchByTerm = async (search) => {
  const getByTitle = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: search } },
        { content: { [Op.substring]: search } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (getByTitle.length !== 0) return getByTitle;

  return [];
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  searchByTerm,
};
