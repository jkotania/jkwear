import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { pathname } = useLocation();
  const [isContactActive, setIsContactActive] = useState(false);
  useEffect(() => {
    setIsContactActive(pathname === '/contact');
  }, [pathname]);
  

  const hoveredLinkClassName = pathname === '/cart' || pathname === '/account' ? 'active' : '';
  const contactLinkClassName = isContactActive ? 'active' : '';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (currentScrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    document.body.classList.toggle('menu-open');
    document.querySelector('.navbar').classList.toggle('hovered');
    const searchIcon = document.querySelector('.navbar__search i');
    const searchSpan = document.querySelector('.navbar__search span');
    const menuIcon = document.querySelector('.navbar__menu i');
    const menuSpan = document.querySelector('.navbar__menu span');
    if (searchIcon && searchSpan) {
      searchIcon.classList.toggle('hidden');
      searchSpan.classList.toggle('hidden');
    }
    if (menuIcon && menuSpan) {
      menuIcon.classList.toggle('hidden');
      menuSpan.classList.toggle('hovered');
      document.querySelector('.navbar__menu').classList.toggle('hovered');
    }
    setMenuActive(!menuActive);
  };
    return (
      <nav className={`navbar ${isScrolled ? 'hovered' : ''} ${hoveredLinkClassName} ${pathname === '/cart' ? 'hovered--navbar' : ''} ${pathname === '/account' ? 'hovered--navbar' : ''} ${contactLinkClassName}`} role="banner">
    <div className="navbar__left">
        <div className="navbar__menu" onClick={toggleSidebar}>
  {sidebarOpen ? (
    <>
      <i className="fas fa-times active"></i>
      <span>Close</span>
    </>
  ) : (
    <>
      <i className="fas fa-bars className={menuActive ? 'active' : ''}" ></i>
      <span>Menu</span>
    </>
  )}
</div>
    <div className="navbar__search">
        <i className="fas fa-search"></i>
        <span>Search</span>
    </div>
</div>
        <div className="navbar__logo">
          <Link to="/" className="logo" style={{ color: 'inherit' }}>
            <h1>JKWEAR</h1>
          </Link>
        </div>
        <div className="navbar__right">
          <Link to="/account" className={`navbar__account ${pathname === '/account' ? 'active' : ''}`} style={{ color: 'inherit'  }}>
            <i className="fas fa-user"></i>
            <span>Account</span>
          </Link>
          <Link to="/cart" className={`navbar__cart ${pathname === '/cart' ? 'active' : ''}`} style={{ color: 'inherit' }}>
            <i className="fas fa-shopping-bag"></i>
            <span>Cart</span>
          </Link>
        </div>
        {sidebarOpen && <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
      </nav>
    );
};

export default Navbar;