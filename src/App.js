import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo Application</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <br /><br />

      <button onClick={addTask}>Add Task</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                setTasks(tasks.filter((_, i) => i !== index))
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;