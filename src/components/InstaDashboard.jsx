import React from "react";
import { FaInstagram } from "react-icons/fa";
import BarGraph from "./BarGraph";
import '../content/InstaDashboard.css';

const InstaDashboard = () => {
  return (
    <div>
      <div className="container">
        <div className="dashboard-header">
          <h2>
            <FaInstagram size={40} color="#E4405F" />
            Instagram
          </h2>
          <p>
            View the performance metrics of your key profile from the reporting.
          </p>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ width: "500px" }}
        >
          <a className="navbar-brand" href="#">
            Overview
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <div className="navbar-nav">
              <a className="nav-link" href="#">
                Engagment{" "}
              </a>
              <a className="nav-link" href="#">
                Audiences{" "}
              </a>
              <a className="nav-link" href="#">
                Impressions
              </a>
              <a className="nav-link" href="#">
                Network
              </a>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card text-center p-3">
                <h5>Facebook Page Likes</h5>
                <p className="display-6">15,342</p>
                <p>LIKES</p>
                <p className="positive">+320 Today</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card text-center p-3">
                <h5>Facebook Page Likes</h5>
                <p className="display-6">15,342</p>
                <p>LIKES</p>
                <p className="positive">+320 Today</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card text-center p-3">
                <h5>Facebook Page Likes</h5>
                <p className="display-6">15,342</p>
                <p>LIKES</p>
                <p className="positive">+320 Today</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card text-center p-3">
                <h5>Facebook Page Likes</h5>
                <p className="display-6">15,342</p>
                <p>LIKES</p>
                <p className="positive">+320 Today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Statistics and Post Activity Side by Side */}
        <div className="statistics-activity">
          {/* Account Statistic */}
          <div className="account-statistic">
            <div>
              <BarGraph />
            </div>
          </div>

          {/* Post Activity */}
          <div className="post-activity">
            <h2>Post Activity</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Impressions</th>
                  <th>Rates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Post Photos</td>
                  <td>981</td>
                  <td className="positive">+4.5%</td>
                </tr>
                <tr>
                  <td>Branding Guideline</td>
                  <td>290</td>
                  <td className="positive">+23%</td>
                </tr>
                <tr>
                  <td>Logo Branding</td>
                  <td>572</td>
                  <td className="positive">+6%</td>
                </tr>
                <tr>
                  <td>Mobile Apps</td>
                  <td>67</td>
                  <td className="negative">-2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaDashboard;
