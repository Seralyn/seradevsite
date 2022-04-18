import React from 'react';
import './Portfolio.css';
import goodman from '../img/portfolioSiteThumbs/goodmanMechicalThumb.png';
import foodsite from '../img/portfolioSiteThumbs/foodSiteThumb.png';
import weatherscrp from '../img/portfolioSiteThumbs/weatherScraperThumb.png';
import letsconn from '../img/portfolioSiteThumbs/letsConnectThumb.png';
import guessNum from '../img/portfolioSiteThumbs/guessNumberThumb.png';
import mikeDB from '../img/portfolioSiteThumbs/mikesDBThumb.png';
import todo from '../img/portfolioSiteThumbs/toDoappThumb.png';
import seranet from '../img/portfolioSiteThumbs/seranetThumb.png';

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
                    <img src={goodman} alt="" />
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <img src={foodsite} alt="" />
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <img src={weatherscrp} alt="" />
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <img src={letsconn} alt="" />
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <img src={guessNum} alt="" />
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <img src={mikeDB} alt="" />
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <img src={todo} alt="" />
                </div>
                <div className="w-96 mt-14 mx-5 transition-transform ease-linear hover:scale-110">
                    <img src={seranet} alt="" />
                </div>
            </div>
        </div>
    );
}
