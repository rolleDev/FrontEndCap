import React from 'react';
import './LoginModal.css';

function LoginModal({ isOpen, closeLoginModal, openSignUpModal }) {
    if (!isOpen) return null;

    return (
        <div className="modal" onClick={closeLoginModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={closeLoginModal}>&times;</span>
                <div className="login-container">
                    <img src="/Images/Logo.png" alt="logo" className="logo" />
                    <h2>Login</h2>
                    <p>
                        Are you a new member?{' '}
                        <a href="#" className="sign-up-link" onClick={() => { openSignUpModal(); closeLoginModal(); }}>Sign Up Here</a>
                    </p>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Value" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Value" required />

                        <button type="submit" className="sign-in-btn">Sign In</button>
                    </form>
                    <a href="#" className="forgot-password">Forgot Password</a>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
