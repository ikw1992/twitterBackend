var express = require("express");
var router = express.Router();
require("../models/connection");
const User = require("../models/users");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");
const { chekUser } = require("../modules/chekUsers");
const { find } = require("../models/users");
const Tweet = require("../models/tweets");

router.post("/tweets", (req, res) => {
  const pattern = /#.[?&-a]*/gi;
  const hashtag = req.body.message.match(pattern);
  console.log(hashtag);
  const newTweet = new Tweet({
    message: req.body.message,
    date: req.body.date,
    hastags: hashtag,
    likes: req.body.like,
  });

  newTweet.save().then((newTweet) => {
    res.json({ result: true, tweet: newTweet.tweet });
  });
});

router.delete("/:tweet", (req, res) => {
  Tweet.deleteOne({ id: "633ed90d6334f70372293bf2" }).then(() => {
    Tweet.findById(req.params.tweet).then((data) => {
      console.log(data);
    });
    res.json({ result: true });
  });
});

module.exports = router;
