import React, { useEffect } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

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
          <Link to={"/workinprogress"}>Men</Link>
        </li>
        <li>
          <Link to={"/workinprogress"}>Women</Link>
        </li>
      </ul>
      <div className='sidebar-bottom'>
        <p>JKWEAR</p>
      </div>
    </div>
  );
};
export default Sidebar;

