const postService = require('../services/postService');

const create = async (req, res) => {
  const { id: userId } = req.user;
  const post = req.body;

  const result = await postService.createPost(post, userId);

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
  const { id: userId } = req.user;

  const postUpdated = await postService.updatePost(post, userId);

  return res.status(200).json(postUpdated);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  await postService.deletePost(id, user);

  return res.status(204).send();
};

const search = async (req, res) => {
  const { q: term } = req.query;

  if (!term || term.length === 0) {
    const posts = await postService.getAllPosts();

    return res.status(200).json(posts);
  }

  const result = await postService.searchByTerm(term);

  return res.status(200).json(result);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
  search,
};
