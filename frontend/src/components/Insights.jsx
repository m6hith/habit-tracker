import "./Insights.css";
import { useEffect, useState } from "react";
import API from "../services/api";

const Insights = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/insights").then((res) => setData(res.data));
  }, []);

  if (!data) return null;

  return (
    <div className="insights">
      <h3>Insights</h3>
      <p>Total Habits: {data.totalHabits}</p>
      <p>Best Streak: {data.bestStreak}</p>
    </div>
  );
};

export default Insights;
