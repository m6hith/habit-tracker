import "./CreateHabit.css";
import { useState } from "react";
import API from "../services/api";

const CreateHabit = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const submit = async () => {
    if (!title) return;
    await API.post("/habits", { title, category });
    setTitle("");
    setCategory("");
    refresh();
  };

  return (
    <div className="card create-habit">
      <h2>✨ Create New Habit</h2>

      <div className="form-row">
        <input
          placeholder="Habit title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={submit}>
        Add Habit
      </button>
    </div>
  );
};

export default CreateHabit;
