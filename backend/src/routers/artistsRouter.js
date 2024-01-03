const express = require("express");

const router = express.Router();

const { browse } = require("../controllers/artistControllers");

router.get("/", browse);

module.exports = router;
