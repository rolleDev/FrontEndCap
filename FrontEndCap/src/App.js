import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import LoginModal from './components/LoginModal/LoginModal';
import SignUpModal from './components/SignUpModal/SignUpModal';
import './App.css';

function App() {
    // State to control modal visibility
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignUpOpen, setSignUpOpen] = useState(false);

    return (
        <div className="App">
            <Navbar 
                openLoginModal={() => setLoginOpen(true)} 
                openSignUpModal={() => setSignUpOpen(true)} 
            />
            <LandingPage /> {/* This displays the landing page content */}
            <LoginModal 
                isOpen={isLoginOpen} 
                closeLoginModal={() => setLoginOpen(false)} 
                openSignUpModal={() => { setSignUpOpen(true); setLoginOpen(false); }} 
            />
            <SignUpModal 
                isOpen={isSignUpOpen} 
                closeSignUpModal={() => setSignUpOpen(false)} 
                openLoginModal={() => { setLoginOpen(true); setSignUpOpen(false); }}
            />
        </div>
    );
}

export default App;
