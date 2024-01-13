/* // PendingTasks.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PendingTasks = () => {
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?completed=false');
      setPendingTasks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Pending Tasks</h1>
      <ul>
        {pendingTasks.map((task) => (
          <li key={task.id}>
            <Link to={`/todo/${task.id}`}>
              {`${task.title} - ${task.date} ${task.time}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingTasks;
 */