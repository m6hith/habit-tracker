import "./HabitCard.css";
import API from "../services/api";

const HabitCard = ({ habit, refresh }) => {
  const progress = Math.min(habit.streak * 10, 100);

  const checkIn = async () => {
    await API.post(`/habits/${habit._id}/checkin`);
    refresh();
  };

  return (
    <div className="card habit-card">
      <h3>{habit.title}</h3>
      <p>{habit.category}</p>

      <div className="progress">
        <div style={{ width: `${progress}%` }} />
      </div>

      <span className="streak">🔥 {habit.streak} day streak</span>

      <button className="primary-btn" onClick={checkIn}>
        Check-in
      </button>
    </div>
  );
};

export default HabitCard;
