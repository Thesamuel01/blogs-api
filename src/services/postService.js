const boom = require('@hapi/boom');

const { BlogPost, Category, PostCategory, User, sequelize } = require('../database/models');

const getUserIdByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user.id;
};

const checkCategoriesIds = async (categories) => Promise.all(
  categories.map(async (id) => Category.findByPk(id)),
).then((values) => {
  const hasCategoryNotFound = values.some((value) => !value);

  if (hasCategoryNotFound) throw boom.badRequest('"categoryIds" not found');
});

const createPost = async ({ title, content, categoryIds }, userEmail) => {
  const userId = await getUserIdByEmail(userEmail);
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
  console.log(post);
  if (!post) throw boom.notFound('Post does not exist');

  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
};
