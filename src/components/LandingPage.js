import React from 'react';
import './LandingPage.css';

import logo from '../logo.svg';

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center pt-44 z-0">
            <img src={logo} className="App-logo z-0 " alt="logo" />
            <div className="mt-32">
                <p className="text-white">
                    If you like flashy colors, unicorns, rainbows, etc, feel
                    free to check out the
                    <a
                        href="http://seralyn.net"
                        target="_blank"
                        className="px-2 cursor-pointer underline"
                    >
                        other version
                    </a>
                    of my personal website.
                </p>
            </div>
        </div>
    );
}
