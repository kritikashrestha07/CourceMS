import React, { useState } from "react";

export default function TodoApp() { 
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  }

  function deleteTask(index) { 
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  }

  function toggleTask(index) {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 via-pink-500 to-red-500">
      
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center w-[420px] transition-all duration-500 hover:scale-105">
        
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">
          📝 To-Do App
        </h1>

        {/* Input Section */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="flex-1 px-4 py-3 rounded-xl focus:outline-none text-gray-700"
          />

          <button
            onClick={addTask}
            className="px-5 py-3 bg-green-400 text-white font-semibold rounded-xl shadow-lg 
                       hover:bg-green-500 hover:scale-110 active:scale-95 
                       transition-all duration-300"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {tasks.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/30 px-4 py-3 rounded-xl text-white transition-all duration-300 hover:bg-white/40"
            >
              <span
                onClick={() => toggleTask(index)}
                className={`cursor-pointer flex-1 text-left ${
                  t.completed ? "line-through opacity-60" : ""
                }`}
              >
                {t.text}
              </span>

              <button
                onClick={() => deleteTask(index)}
                className="ml-4 text-red-200 hover:text-red-400 text-xl"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <p className="text-white/70 mt-4">No tasks yet 🚀</p>
        )}
      </div>
    </div>
  );
}
