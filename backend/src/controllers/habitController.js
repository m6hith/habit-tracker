const Habit = require("../models/Habit");
const { calculateStreak } = require("../utils/streakUtils");

exports.createHabit = async (req, res) => {
  const habit = await Habit.create({
    ...req.body,
    user: req.user.id,
  });
  res.status(201).json(habit);
};

exports.getHabits = async (req, res) => {
  const habits = await Habit.find({ user: req.user.id });
  res.json(habits);
};

exports.checkInHabit = async (req, res) => {
  const habit = await Habit.findById(req.params.id);
  habit.checkIns.push({ date: new Date() });
  habit.streak = calculateStreak(habit.checkIns);
  await habit.save();
  res.json(habit);
};

exports.deleteHabit = async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
