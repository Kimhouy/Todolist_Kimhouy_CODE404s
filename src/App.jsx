import { useState } from 'react';
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const editTaskById = (id, newAction) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, action: newAction };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

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
        <DisplayTask tasks={tasks} onEdit={editTaskById} onDelete={deleteTaskById} />

        <div>
                  <p className="task-text">{tasks.length <= 1?`${tasks.length} task to go. Figthing!`:`${tasks.length} tasks are waiting you, Fighting!`} </p>
          </div>
      </div>
      
    </>
  );
}




export default App