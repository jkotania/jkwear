import React, { useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    if (isOpen) {
      requestAnimationFrame(() => {
        sidebar.classList.add('open');
      });
    } else {
      setTimeout(() => {
        sidebar.classList.remove('open');
      }, 300);
    }
  }, [isOpen]);

  return (
    <div className="sidebar" onClick={toggleSidebar}>
      <ul>
        <li>
          <a href="/workinprogress">MEN</a>
        </li>
        <li>
          <a href="/workinprogress">WOMEN</a>
        </li>
      </ul>
      <div className='sidebar-bottom'>
        <p>JKWEAR</p>
      </div>
    </div>
  );
};
export default Sidebar;

