const router = require("express").Router();
const Candies = require("../db/models/candies");
const Sequelize = require("sequelize");

// GET /api/candies
router.get("/", async (req, res, next) => {
  try {
    const candies = await Candies.findAll();
    res.json(candies);
  } catch (error) {
    next(error);
  }
});

// GET /api/candies/:candyId
router.get("/:candyId", async (req, res, next) => {
  try {
    const candy = await Candies.findByPk(req.params.candyId);
    res.json(candy);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
