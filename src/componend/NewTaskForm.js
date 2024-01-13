/* import React, { useState } from 'react';

const NewTaskForm = ({ onCreate }) => {
  const [newTask, setNewTask] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCreateTask = () => {
    if (newTask.trim()) {
      onCreate({ title: newTask.trim(), completed: isCompleted });
      setNewTask('');
      setIsCompleted(false);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>New Task</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
            style={{ marginRight: '5px' }}
          />
          Completed
        </label>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>
          Task Title:
          <input
            type="text"
            placeholder="Enter task title"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{ marginLeft: '5px', width: '70%' }}
          />
        </label>
      </div>
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
};

export default NewTaskForm;
 */