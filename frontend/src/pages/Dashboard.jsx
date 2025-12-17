import "./Dashboard.css";
import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import HabitCard from "../components/HabitCard";
import CreateHabit from "../components/CreateHabit";
import Insights from "../components/Insights";

const Dashboard = () => {
  const [habits, setHabits] = useState([]);

  const loadHabits = async () => {
    const res = await API.get("/habits");
    setHabits(res.data);
  };

  useEffect(() => {
    loadHabits();
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1 className="dashboard-title">Your Habits</h1>

        <div className="section">
          <CreateHabit refresh={loadHabits} />
        </div>

        {habits.length === 0 ? (
          <div className="empty-state">
            <h3>No habits yet</h3>
            <p>Start by creating your first habit 👆</p>
          </div>
        ) : (
          <div className="habits-grid">
            {habits.map((h) => (
              <HabitCard key={h._id} habit={h} refresh={loadHabits} />
            ))}
          </div>
        )}

        <div className="section">
          <Insights />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
