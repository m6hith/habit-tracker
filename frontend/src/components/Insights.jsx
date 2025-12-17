import "./Insights.css";

const Insights = ({ habits }) => {
  const total = habits.length;
  const completed = habits.filter((h) => h.streak > 0).length;

  return (
    <div className="insights">
      <div className="stat-card">
        <h3>Total Habits</h3>
        <p>{total}</p>
      </div>

      <div className="stat-card">
        <h3>Active Habits</h3>
        <p>{completed}</p>
      </div>

      <div className="stat-card">
        <h3>Consistency</h3>
        <p>{total ? Math.round((completed / total) * 100) : 0}%</p>
      </div>
    </div>
  );
};

export default Insights;
