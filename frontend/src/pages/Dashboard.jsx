import "./Dashboard.css";
import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreateHabit from "../components/CreateHabit";
import HabitCard from "../components/HabitCard";
import CalendarMini from "../components/CalendarMini";

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [active, setActive] = useState("create");

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

      <div className="layout">
        <Sidebar active={active} setActive={setActive} />

        <main className="content">
          {active === "create" && <CreateHabit refresh={loadHabits} />}

          {active === "habits" && (
            <div className="grid">
              {habits.map((h) => (
                <HabitCard key={h._id} habit={h} refresh={loadHabits} />
              ))}
            </div>
          )}

          {active === "insights" && <CalendarMini />}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
