import React from 'react';
import './LandingPage.css';

import logo from '../logo.svg';

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center mt-12">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}
