const postService = require('../services/postService');

const create = async (req, res) => {
  const { email } = req.user;
  const post = req.body;

  const result = await postService.createPost(post, email);

  return res.status(201).json(result);
};

const getAll = async (_req, res) => {
  const posts = await postService.getAllPosts();

  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPost(id);

  return res.status(200).json(post);
};

const update = async (req, res) => {
  const { id } = req.params;
  const post = { id, ...req.body };
  const { email } = req.user;

  const postUpdated = await postService.updatePost(post, email);

  return res.status(200).json(postUpdated);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
