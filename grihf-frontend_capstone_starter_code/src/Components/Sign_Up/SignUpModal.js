import React from 'react';
import './SignUpModal.css';

function SignUpModal({ isOpen, closeSignUpModal, openLoginModal }) {
    if (!isOpen) return null;

    return (
        <div className="modal" onClick={closeSignUpModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={closeSignUpModal}>&times;</span>
                <div className="login-container">
                    <img src="/Images/Logo.png" alt="logo" className="logo" />
                    <h2>Sign Up</h2>
                    <p>
                        Already a Member?{' '}
                        <a href="#" className="login-link" onClick={() => { openLoginModal(); closeSignUpModal(); }}>Login</a>
                    </p>
                    <form>
                        <label htmlFor="role">Role</label>
                        <select id="role" required>
                            <option value="" disabled selected>Select your role</option>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                            <option value="nurse">Nurse</option>
                        </select>

                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" placeholder="Value" required />

                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" placeholder="Value" required />

                        <label htmlFor="email-signup">Email</label>
                        <input type="email" id="email-signup" placeholder="Value" required />

                        <label htmlFor="password-signup">Password</label>
                        <input type="password" id="password-signup" placeholder="Value" required />

                        <div className="button-group">
                            <button type="submit" className="submit-btn">Submit</button>
                            <button type="reset" className="reset-btn">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpModal;
