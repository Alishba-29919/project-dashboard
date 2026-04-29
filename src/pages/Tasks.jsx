import React, { useState } from 'react';
import { BiPlus, BiTrash, BiCheck, BiRefresh, BiTimeFive } from 'react-icons/bi';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish Dashboard UI", status: "Completed" },
    { id: 2, title: "Fix Sidebar Refresh Issue", status: "In Progress" },
  ]);
  const [newTask, setNewTask] = useState('');

  // 1. Add Task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([{ id: Date.now(), title: newTask, status: "In Progress" }, ...tasks]);
      setNewTask('');
    }
  };

  // 2. Toggle Status (Complete / In Progress)
  const toggleStatus = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { 
          ...task, 
          status: task.status === "Completed" ? "In Progress" : "Completed" 
        };
      }
      return task;
    }));
  };

  // 3. Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Project Tasks</h1>
        <p className="text-gray-500 mb-6">Manage and update your progress in real-time.</p>
        
        <div className="flex gap-3 bg-[#11141d] p-2 rounded-2xl border border-gray-800 focus-within:border-orange-500 transition-all">
          <input 
            type="text" 
            placeholder="What's your next goal?" 
            className="flex-1 bg-transparent border-none outline-none text-white px-4 py-2"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-orange-500/20">
            <BiPlus size={20} /> Add
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className={`bg-[#11141d] border p-5 rounded-3xl flex items-center justify-between group transition-all ${task.status === 'Completed' ? 'border-green-500/20 opacity-70' : 'border-gray-800 hover:border-orange-500/50'}`}>
            <div className="flex items-center gap-5">
              {/* Status Indicator */}
              <div className={`p-3 rounded-2xl ${task.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                {task.status === 'Completed' ? <BiCheck size={24} /> : <BiTimeFive size={24} />}
              </div>
              
              <div>
                <h3 className={`text-lg font-bold transition-all ${task.status === 'Completed' ? 'text-gray-500 line-through' : 'text-white'}`}>
                  {task.title}
                </h3>
                <span className={`text-[10px] uppercase font-black tracking-widest ${task.status === 'Completed' ? 'text-green-500' : 'text-orange-500'}`}>
                  {task.status}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Toggle Status Button */}
              <button 
                onClick={() => toggleStatus(task.id)}
                className={`p-2 rounded-xl border transition-all ${task.status === 'Completed' ? 'border-gray-700 text-gray-500 hover:text-orange-500' : 'border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-white'}`}
                title={task.status === 'Completed' ? "Mark as Pending" : "Mark as Complete"}
              >
                {task.status === 'Completed' ? <BiRefresh size={20} /> : <BiCheck size={20} />}
              </button>

              {/* Delete Button */}
              <button onClick={() => deleteTask(task.id)} className="p-2 text-gray-600 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100">
                <BiTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}