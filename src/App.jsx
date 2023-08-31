import { useState } from 'react';
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);
  };

  const taskAdded = (action) => {
    const updatedTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999),
        action,
      },
    ];
    setTasks(updatedTasks);
  };


  return (
    <>
      <div className='task-contain-all'>
        <AddTask onCreate={taskAdded} />
        <DisplayTask tasks={tasks} onDelete={deleteTaskById} />
      </div>
    </>
  );
}




export default App