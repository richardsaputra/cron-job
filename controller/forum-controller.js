const generalModel = require("../model/general-model");

exports.resetForum = async (req, res) => {
  try {
    return res.send(await generalModel.reset(`forum`));
  } catch (err) {
    return res.send({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};

exports.resetForumById = async (req, res) => {
  try {
    return res.send(
      await generalModel.resetById(`forum`, `id_forum=${req.params.id}`)
    );
  } catch (err) {
    return res.send({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};

exports.resetAllForumCache = async (req, res) => {
  try {
    const result = await generalModel.reset(`forum`);
    for (let i = 0; i < result.data.length; i++) {
      generalModel.resetById(`forum`, `id_forum=${result.data[i].id_forum}`);
    }
    console.log("Berhasil mereset cache redis");
    return res.send(result);
  } catch (err) {
    return res.send({
      status: "error",
      message: err.message,
      data: null,
    });
  }
};
