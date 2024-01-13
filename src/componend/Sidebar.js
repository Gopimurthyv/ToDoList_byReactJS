import React, { useState } from 'react';
import './style.css';


const NavHeader = () => (
  <header className='sidebar-header'>
    <button type='button'>My ToDo</button>
  </header>
);
export default function Sidebar( { pendingTasks, completedTasks } ) {

  return (
    <div>
      <aside className='sidebar'>
        <NavHeader />
      <div className='nav-button siderbar-content '>
              <h5 className='sidebar-content'>Completed Tasks</h5>
              <br/>
      <ul className='sidebar-content'>
        {completedTasks.map((task) => (
          <li key={task.id}>{`${task.title} - ${task.description} `}</li>
        ))}
      </ul>
      <br />
      <h5 className='sidebar-content'>Pending Tasks</h5>
        <br/>
      <ul className='sidebar-content'>
        {pendingTasks.map((task) => (
          <li key={task.id}>{`${task.title} - ${task.description} `}</li>
        ))}
      </ul>

      </div>
    </aside>
    </div>
  );
}
