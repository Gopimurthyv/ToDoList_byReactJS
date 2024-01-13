import logo from './logo.svg';
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import CompletedTasks from './componend/CompletedTasks';
import PendingTasks from './componend/PendingTasks';
import Sidebar from './componend/Sidebar';
import TodoList from './componend/TodoList';
/* import Modal from 'react-modal'; */
import MainContent from './componend/MainContent';


function App() {
  
  return (
    <div style={{ display: 'flex' }}>
     <div className='main-container'>
      <div className='center-container'>
         <TodoList />
       {/* <Sidebar /> */}
      </div>
     </div>
     
   {/*   <Routes>
          <Route path="/completed-tasks" component={<CompletedTasks />} />
          <Route path="/pending-tasks" component={<PendingTasks/>} />
          <Route path="/todo/:id" component={<TodoList />} />
    </Routes> */}
    </div>
  );
}

export default App;
