import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaBars, FaMoon, FaBriefcase, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import BarGraph from './BarGraph';
import { Link,Outlet, Route, Routes } from 'react-router-dom';
import YouTube from './YouTube';
import InstaDashboard from './InstaDashboard';
import Facebook from './Facebook';
import TwitterDashboard from './TwitterDashboard';
import Linkedin from './Linkedin';
import DashboarSecbarChar from './DashboardSecbarChar';
const Dashboard = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);


  return (
    <div>
      <nav
  className="navbar navbar-expand-lg navbar-dark bg-dark"
  style={{
    background: "linear-gradient(to right, #141e30, #243b55)",
    padding: "10px",
    justifyContent: "center",
  }}
>
  <div className="container-fluid justify-content-center">
    <h4
      className="navbar-brand text-white text-center"
      style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}
    >
      Social Media Dashboard
    </h4>
  </div>
</nav>


      {/* Main Content Section */}
      <div className="container mt-4">
        <h2>Welcome to the Social Media Dashboard</h2>
        {/* Outlet will dynamically load the selected component */}
        <Outlet />
      </div>

<div className="container mt-4">
  <div className="row">
  <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaFacebook size={40} color="#3b5998" style={{cursor: "pointer"}} />
              <h5>Facebook Page Likes</h5>
              <p className="display-6">15,342</p>
              <p>LIKES</p>
              <p className="negative">+320 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaInstagram size={40} color="#E4405F" style={{cursor: "pointer"}}/>
              <h5>Instagram Followers</h5>
              <p className="display-6">24,891</p>
              <p>FOLLOWERS</p>
              <p className="positive">+1,200 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaYoutube size={40} color="#FF0000" style={{cursor: "pointer"}}/>
              <h5>YouTube Subscribers</h5>
              <p className="display-6">8,452</p>
              <p>SUBSCRIBERS</p>
              <p className="positive">+95 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaTwitter size={40} color="#1DA1F2" style={{cursor: "pointer"}}/>
              <h5>Twitter Followers</h5>
              <p className="display-6">5,678</p>
              <p>FOLLOWERS</p>
              <p className="positive">+56 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaLinkedin size={40} color="#0077B5" style={{cursor: "pointer"}} />
              <h5>LinkedIn Connections</h5>
              <p className="display-6">3,214</p>
              <p>CONNECTIONS</p>
              <p className="positive">+20 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaBriefcase size={40} color="#555" style={{cursor: "pointer"}}/>
              <h5>Naukri Profile Views</h5>
              <p className="display-6">1,105</p>
              <p>VIEWS</p>
              <p className="positive">+10 Today</p>
            </div>
          </div>
        </div>

        <div className="graph-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", width: "100%" }}>
  <div style={{ flex: "1", maxWidth: "50%" }}>
    <BarGraph />
  </div>
  <div style={{ flex: "1", maxWidth: "50%" }}>
    <DashboarSecbarChar />
  </div>
</div>

<h3 className="mt-4">Overview - Today</h3>
         <div className="row">
         <div className="col-md-4 mb-4" >
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaFacebook size={40} color="#3b5998" style={{cursor: "pointer"}} />
              <h5>Facebook Engagement</h5>
              <p className="display-6">5,432</p>
              <p>INTERACTIONS</p>
              <p className="positive" >+210 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaInstagram size={40} color="#E4405F" style={{cursor: "pointer"}}/>
              <h5>Instagram Story Views</h5>
              <p className="display-6">10,342</p>
              <p>VIEWS</p>
              <p className="positive">+450 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaYoutube size={40} color="#FF0000" style={{cursor: "pointer"}} />
              <h5>YouTube Video Likes</h5>
              <p className="display-6">2,876</p>
              <p>LIKES</p>
              <p className="positive">+134 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3"style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaTwitter size={40} color="#1DA1F2" style={{cursor: "pointer"}} />
              <h5>Twitter Mentions</h5>
              <p className="display-6">1,987</p>
              <p>MENTIONS</p>
              <p className="positive">+56 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaLinkedin size={40} color="#0077B5" style={{cursor: "pointer"}} />
              <h5>LinkedIn Post Impressions</h5>
              <p className="display-6">3,214</p>
              <p>IMPRESSIONS</p>
              <p className="positive">+220 Today</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card text-center p-3" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",color: "white",border: "none", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",transition: "transform 0.3s"}}>
              <FaBriefcase size={40} color="#555" style={{cursor: "pointer"}}/>
              <h5>Naukri Profile Views</h5>
              <p className="display-6">1,105</p>
              <p>VIEWS</p>
              <p className="positive">+10 Today</p>
            </div>
          </div>
  </div>
</div>

      {/* Nested Routes for Social Media Pages */}
      <Routes>
        <Route path="InstaDashboard" element={<InstaDashboard />} />
        <Route path="YouTube" element={<YouTube />} />
        <Route path="Linkedin" element={<Linkedin />} />
        <Route path="TwitterDashboard" element={<TwitterDashboard />} />
        <Route path="Facebook" element={<Facebook />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
