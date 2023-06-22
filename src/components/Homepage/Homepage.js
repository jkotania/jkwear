import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import video1 from './Video-1.mp4';
import video2 from './Video-2.mp4';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Homepage = () => {

  useEffect(() => {
    document.title = 'Homepage - jkwear';
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="homepage">
        <div className="video-container">
          <video src={video1} autoPlay loop muted id="video" />
          <div className="text">
            <h1>Welcome!</h1>
            <p>Check our new collection.</p>
            <div className="link">
              <Link to="/workinprogress">
                <button className="button">Explore us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="video-container">
          <video src={video2} autoPlay loop muted id="video2" />
          <div className="text-2">
            <h1>Shocked?</h1>
            <p>As same as we are, don't worry.</p>
            <div className="link">
              <Link to="/contact">
                <button className="button">Contact us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
