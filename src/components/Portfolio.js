import React from 'react';
import './Portfolio.css';
import goodman from '../img/portfolioSiteThumbs/goodmanMechicalThumb.webp';
import foodsite from '../img/portfolioSiteThumbs/foodSiteThumb.webp';
import weatherscrp from '../img/portfolioSiteThumbs/weatherScraperThumb.webp';
import letsconn from '../img/portfolioSiteThumbs/letsConnectThumb.webp';
import guessNum from '../img/portfolioSiteThumbs/guessNumberThumb.webp';
import mikeDB from '../img/portfolioSiteThumbs/mikesDBThumb.webp';
import todo from '../img/portfolioSiteThumbs/toDoappThumb.webp';
import seranet from '../img/portfolioSiteThumbs/seranetThumb.webp';
import weatherDB from '../img/portfolioSiteThumbs/weather-dashboard.webp';
import codespaces from '../img/portfolioSiteThumbs/codespacesMockupThumb.webp';
import dadjokes from '../img/portfolioSiteThumbs/dadjokesapi.webp';

export default function Portfolio() {
    return (
        <div className="text-green-300 flex flex-col">
            <div className="flex flex-col justify-center mt-32">
                <div className="">
                    <h1 className="text-3xl">Portfolio</h1>
                </div>
                <div className="mt-10">
                    <p className="px-20">
                        Here are a few examples of my work. Some are mock-ups,
                        some are functioning apps, SPAs, etc.
                    </p>
                </div>
            </div>
            <div className="inline-flex mt-20 justify-center flex-wrap">
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="https://idyllic-croquembouche-984ff3.netlify.app/"
                        target="_blank"
                    >
                        <img src={codespaces} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a href="http://goodmanmechanical.net" target="_blank">
                        <img src={goodman} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a href="http://seralyn.net/" target="_blank">
                        <img src={seranet} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="http://yourweathernow.netlify.app/"
                        target="_blank"
                    >
                        <img src={weatherDB} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="http://seralyn.net/public/portfolio/foodNinja/public/index.html"
                        target="_blank"
                    >
                        <img src={foodsite} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="http://seralyn.net/public/portfolio/WeatherScraper/weatherScraperHome.php"
                        target="_blank"
                    >
                        <img src={weatherscrp} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="http://seralyn.net/public/portfolio/LetsConnect/appLandingPage.html"
                        target="_blank"
                    >
                        <img src={letsconn} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="http://seralyn.net/public/portfolio/guessMyNumber/public/index.html"
                        target="_blank"
                    >
                        <img src={guessNum} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="http://seralyn.net/public/mike/library.php"
                        target="_blank"
                    >
                        <img src={mikeDB} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="http://seralyn.net/public/portfolio/reactToDo/build/index.html"
                        target="_blank"
                    >
                        <img src={todo} alt="" />
                    </a>
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <a
                        href="http://seralyn.net/public/portfolio/api/dadJokes/index.html"
                        target="_blank"
                    >
                        <img src={dadjokes} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}
