import React, { useEffect, useState } from 'react';
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6';
import './style.css';
import axios from 'axios';
import Sidebar from './Sidebar';

export default function TodoList() {
  const [date, setDate] = useState();
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
  });
  const [data, setData] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:2024/todoList', inputValues);

    // Fetch the updated data from the server
    const updatedData = await axios.get('http://localhost:2024/todoList');
    setData(updatedData.data);

    // Clear the input fields
    setInputValues({ title: '', description: '' });
  };

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:2024/todoList');
      setData(res.data);

     // Separate completed and pending tasks
      const completedTasks = res.data.filter((todo) => todo.completed);
      const pendingTasks = res.data.filter((todo) => !todo.completed);

      setCompletedTasks(completedTasks);
      setPendingTasks(pendingTasks);

    } catch (error) {
      console.error('Error fetching todo list data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

    const handleToggle = (id) => {
    const updatedTodos = data.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setData(updatedTodos);

    const completedTasks = updatedTodos.filter((todo) => todo.completed);
    const pendingTasks = updatedTodos.filter((todo) => !todo.completed);

    setCompletedTasks(completedTasks);
    setPendingTasks(pendingTasks);
  };
  const handleDelete = id => {
        axios.delete(`http://localhost:2024/todoList/${id}`)
        .then(res => {
            window.location.reload();
        })
      }

  return (
    <div className="todo ">
      <Sidebar pendingTasks={pendingTasks} completedTasks={completedTasks} />
      <div className='d-flex flex-column justify-content-center align-items-center vw-100'>
        <h1>Todo List</h1>
         <div className='p-3 mb-5 rounded p-4 justify-content-center align-items-center todo-wrapper'>
          <form onSubmit={handleSubmit} className='row g-3'>
            <div className="col-md-6 todo-input">
              <label htmlFor="title" className='form-label label'>Title</label>
              <input
                type='text'
                className='form-control rounded shadow todo-input-item'
                id='title'
                onChange={(e) => setInputValues({ ...inputValues, title: e.target.value })}
                value={inputValues.title}
              />
            </div>
            <div className="col-md-6 todo-input">
              <label htmlFor="description" className='form-label label'>Description</label>
              <input
                type='text'
                className='form-control rounded shadow todo-input-item'
                id='description'
                onChange={(e) => setInputValues({ ...inputValues, description: e.target.value })}
                value={inputValues.description}
              />
            </div>
            <div className="col-md-12 ">
              <button type="submit" className='add-btn btn p-3'><strong>Add +</strong></button>
            </div>
          </form>
        </div>
        <div className='p-3 mb-5 rounded p-4 justify-content-evenly align-items-center '> 
          <h4>Task</h4>
          <div className='todo-list'>
            {data.map((item, i) => (
              <div className='todo-list-item shadow' key={i}>
                <div>
                  <input type='checkbox' className='rounded justify-content-center align-item-center'
                  checked={item.completed}
                  onChange={() => handleToggle(item.id)}/>
                  <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }} className='ms-3'>{item.title}</span>
                  <p className='ms-3'>{item.description}</p>
                </div>
                <div>
                  {/* <FaPenToSquare className='icon'/> */}
                  <span onClick={()=>handleDelete(item.id)}><FaTrashCan className='check-icon ms-5'/></span>
                </div>
              </div>
            ))}
          </div>
        </div>           
      </div>
    </div>
  );
}
