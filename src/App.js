import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  	const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Doctor Apt",
        day: "Feb 5th at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "School Meeting",
        day: "Feb 6th at 2:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Bank",
        day: "Feb 5th at 2:30pm",
        reminder: false,
      },
    ]);

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id ))
    }

    const toggleReminder =(id) => {
      setTasks(tasks.map((task) => task.id ===id ? { ...task, reminder: !task.reminder } : task))
    }

    const addTask = (task) => {
      const id= Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task}
      setTasks([...tasks, newTask])
    }

  return (

    <div className="container">

      <Header title={"Task Tracker"}
      onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} 
      />

      { showAddTask && <AddTask onAdd={addTask} /> }
      {
      tasks.lenght > 0 ? 
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      /> 
      : 'NO NEW TASK YET'
      }

    </div>
  );
}

export default App;
