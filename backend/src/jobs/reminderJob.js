const cron = require("node-cron");
const Habit = require("../models/Habit");

cron.schedule("0 9 * * *", async () => {
  try {
    console.log("⏰ Running daily habit reminder job");

    const habits = await Habit.find().populate("user");

    habits.forEach((habit) => {
      console.log(
        `Reminder: ${habit.user?.email} should complete habit "${habit.title}"`
      );
    });
  } catch (error) {
    console.error("Reminder job failed:", error.message);
  }
});
