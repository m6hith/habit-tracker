import "./Sidebar.css";

const Sidebar = ({ active, setActive }) => {
  return (
    <aside className="sidebar">
      <button
        className={active === "create" ? "active" : ""}
        onClick={() => setActive("create")}
      >
        ➕ Create Habit
      </button>

      <button
        className={active === "habits" ? "active" : ""}
        onClick={() => setActive("habits")}
      >
        📌 Your Habits
      </button>

      <button
        className={active === "insights" ? "active" : ""}
        onClick={() => setActive("insights")}
      >
        📊 Insights
      </button>
    </aside>
  );
};

export default Sidebar;
