/* // CompletedTasks.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?completed=true');
      setCompletedTasks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Completed Tasks</h1>
      <ul>
        {completedTasks.map((task) => (
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

export default CompletedTasks;
 */