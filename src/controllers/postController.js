const postService = require('../services/postService');

const create = async (req, res) => {
  const { email } = req.user;
  const post = req.body;

  const result = await postService.createPost(post, email);

  return res.status(201).json(result);
};

module.exports = {
  create,
};
