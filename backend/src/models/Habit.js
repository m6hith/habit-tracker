const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    category: { type: String, default: "General" },
    frequency: { type: [String], required: true },
    checkIns: [{ date: Date }],
    streak: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Habit", habitSchema);
