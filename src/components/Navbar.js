import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import fbicon from '../img/facebook.png';
import instaicon from '../img/instagram.png';
import linkedinicon from '../img/linkedin.png';
import githubicon from '../img/github.png';

const Navbar = () => {
    return (
        <div className="navbar justify-around fixed">
            <div class="dropdown bg-[rgba(33,33,33,0)]">
                <label tabindex="0" class="btn m-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="dropdown-content text-white menu p-2 shadow bg-base-100 rounded-box w-52 bg-[rgb(79,76,73)]"
                >
                    <li className="rounded-lg">
                        <a className="hover:bg-orange-300" href="/about">
                            About
                        </a>
                    </li>
                    <li className="rounded-lg">
                        <a className="hover:bg-blue-300" href="/knowledgebase">
                            Knowledgebase
                        </a>
                    </li>
                    <li className="rounded-lg">
                        <a className="hover:bg-green-300" href="/portfolio">
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
            <div className="hidden lg:flex">
                <li className="text-slate-200 hover:text-white">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-orange-300 hover:text-orange-400">
                    <Link to="/about">About</Link>
                </li>
                <li className="text-blue-300 hover:text-blue-400">
                    <Link to="/knowledgebase">Knowledgebase</Link>
                </li>
                <li className="text-green-300 hover:text-green-400">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </div>

            <div className="flex justify-evenly w-40">
                <img className="w-8 mr-4" alt="" src={githubicon} />
                <img className="w-8 mr-4" alt="" src={fbicon} />
                <img className="w-8 mr-4" alt="" src={instaicon} />
                <img className="w-8 mr-4" alt="" src={linkedinicon} />
            </div>
        </div>
    );
};

export default Navbar;
