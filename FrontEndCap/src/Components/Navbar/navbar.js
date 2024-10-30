import React from 'react';
import './Navbar.css';

function Navbar({ openLoginModal, openSignUpModal }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="Images/Logo.png" alt="Stay Healthy Logo" />
                <span>StayHealthy</span>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Appointment</a></li>
                <li><a href="#">Health Blog</a></li>
                <li><a href="#">Reviews</a></li>
            </ul>
            <div className="login-buttons">
                <button className="sign-up" onClick={openSignUpModal}>Sign Up</button>
                <button className="log-in" onClick={openLoginModal}>Log In</button>
            </div>
        </nav>
    );
}

export default Navbar;
