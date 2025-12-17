const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createHabit,
  getHabits,
  checkInHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.post("/", auth, createHabit);
router.get("/", auth, getHabits);
router.post("/:id/checkin", auth, checkInHabit);
router.delete("/:id", auth, deleteHabit);

module.exports = router;
