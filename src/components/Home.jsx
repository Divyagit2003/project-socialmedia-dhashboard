import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../content/Home.css';
import { Link } from 'react-router-dom';
import DemoSlider from './DemoSlider';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <div className="dashboard-container">
            {/* Navbar */}
            <nav className="dashboard-navbar navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Sociallytics</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/socialmedia">Social Media Activity</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/setting">Settings</Link>
                            </li>
                        </ul>
                        <button className="btn btn-danger ms-3" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>

            {/* Dashboard Welcome Section */}
            <div className="dashboard-welcome text-center mt-5">
                <h1>Welcome to Sociallytics Dashboard</h1>
                <p className="text-muted">Track and analyze your performance across different social media platforms</p>
                
                <div className="platform-links mt-4">
                    <Link to="/socialmedia/instagram" className="platform-card insta">Instagram</Link>
                    <Link to="/socialmedia/youtube" className="platform-card yt">YouTube</Link>
                    <Link to="/socialmedia/facebook" className="platform-card fb">Facebook</Link>
                    <Link to="/socialmedia/twitter" className="platform-card tw">Twitter</Link>
                    <Link to="/socialmedia/linkedin" className="platform-card ln">LinkedIn</Link>
                </div>
            </div>

            <DemoSlider/>
        </div>
    );
}

export default Home;
