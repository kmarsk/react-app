import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState (true)

  const [tasks, setTasks] = useState (
    [
  {
    id: 1,
    text: 'dress fitting',
    day: 'Feb 5th at 4pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'clean car',
    day: 'Feb 25th at 4:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'meet J',
    day: 'Feb 29th at 2:30pm',
    reminder: false,
  }
  ])
  // add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks ([...tasks, newTask])

}

  // delete task:
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder:
        !task.reminder } : task )
      )
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask
      (!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/> ) : ('No Tasks To Show')}
    </div>

  );
}





export default App;
