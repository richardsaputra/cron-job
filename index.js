"use strict";

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cron = require("node-cron");
const forumController = require("./controller/forum-controller");

app.use(bodyParser.json());

require("./router/forum-router")(app);

app.listen(process.env.PORT, process.env.HOST, () => {
  cron.schedule("*/1 * * * *", forumController.resetAllForumCache);
  console.log(
    `Aplikasi berhasil dijalankan - http://${process.env.HOST}:${process.env.PORT}`
  );
});
