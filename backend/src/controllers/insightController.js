const Habit = require("../models/Habit");

exports.getInsights = async (req, res) => {
  const habits = await Habit.find({ user: req.user.id });

  const totalHabits = habits.length;
  const bestStreak = Math.max(...habits.map((h) => h.streak), 0);

  res.json({
    totalHabits,
    bestStreak,
  });
};
