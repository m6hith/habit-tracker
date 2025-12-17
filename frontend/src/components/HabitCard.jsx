import "./HabitCard.css";
import API from "../services/api";

const HabitCard = ({ habit, refresh }) => {
  const today = new Date().toDateString();
  const lastCheck =
    habit.lastCheckedIn && new Date(habit.lastCheckedIn).toDateString();

  const checkedToday = today === lastCheck;

  const handleCheckIn = async () => {
    if (checkedToday) return;
    await API.post(`/habits/${habit._id}/checkin`);
    refresh();
  };
  const progress = Math.min((habit.streak / 30) * 100, 100);

  return (
    <div className="habit-card">
      <h4>{habit.title}</h4>
      <p className="category">Category: {habit.category}</p>

      <div className="streak-row">
        🔥 Streak: <strong>{habit.streak}</strong>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <button
        className={`checkin-btn ${checkedToday ? "disabled" : ""}`}
        onClick={handleCheckIn}
        disabled={checkedToday}
      >
        {checkedToday ? "Checked Today ✅" : "Check-in Today"}
      </button>
    </div>
  );
};

export default HabitCard;
