import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, _) {
  res.send("respond with a resource");
});

module.exports = router;
