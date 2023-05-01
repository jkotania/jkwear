import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import video from './video.mp4';
import { useEffect } from 'react';
import Navbar from  '../Navbar/Navbar';
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
        <video src={video} autoPlay loop muted></video>
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
        <video src={video} autoPlay loop muted></video>
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
    <div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Homepage;
