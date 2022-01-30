const forumController = require("../controller/forum-controller");
const authorization = require("../middleware/authorization");

module.exports = (app) => {
  app.get("/reset-forum", authorization.checkAuth, forumController.resetForum);
  app.get(
    "/reset-forum/:id",
    authorization.checkAuth,
    forumController.resetForumById
  );
  app.get(
    "/reset-all-forum-cache",
    authorization.checkAuth,
    forumController.resetAllForumCache
  );
};
