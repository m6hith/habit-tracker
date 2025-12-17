import "./CreateHabit.css";
import { useState } from "react";
import API from "../services/api";

const CreateHabit = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/habits", {
      title,
      category,
      frequency: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    });
    setTitle("");
    setCategory("");
    refresh();
  };

  return (
    <form className="create-habit" onSubmit={submit}>
      <h3>Create Habit</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button>Add</button>
    </form>
  );
};

export default CreateHabit;
