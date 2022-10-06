var express = require("express");
var router = express.Router();
require("../models/connection");
const User = require("../models/users");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");
const { chekUser } = require("../modules/chekUsers");
const { find } = require("../models/users");
const Tweet = require("../models/tweets");
const { Router } = require("express");

router.post("/:hashtag", (req, res) => {
  const newTweet = new Tweet({
    message: req.body.message,
    date: req.body.date,
    hastags: req.body.hastags,
    likes: req.body.like,
  });

  newTweet.save().then((newTweet) => {
    res.json({ result: true, tweet: newTweet.tweet });
  });
});

module.exports = router;
