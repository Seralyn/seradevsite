import React from 'react';
import './Portfolio.css';
import goodman from '../img/portfolioSiteThumbs/goodmanMechicalThumb.png';
import foodsite from '../img/portfolioSiteThumbs/foodSiteThumb.png';
import weatherscrp from '../img/portfolioSiteThumbs/weatherScraperThumb.png';
import letsconn from '../img/portfolioSiteThumbs/letsConnectThumb.png';
import guessNum from '../img/portfolioSiteThumbs/guessNumberThumb.png';
import mikeDB from '../img/portfolioSiteThumbs/mikesDBThumb.png';

export default function Portfolio() {
    return (
        <div className="text-green-300 flex flex-col items-center">
            <div className="w-80 mt-32">
                <h1 className="text-3xl">Portfolio</h1>
                <div className="mt-10">
                    <p>
                        Here are a few examples of my work. Some are mock-ups,
                        some are functioning apps, SPAs, etc.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-around mt-16">
                    <div className="flex flex-col lg:flex-wrap lg:flex-row">
                        <div className="">
                            <img src={goodman} alt="" />
                        </div>
                        <div className="mt-14">
                            <img src={foodsite} alt="" />
                        </div>
                        <div className="mt-14">
                            <img src={weatherscrp} alt="" />
                        </div>
                        <div className="mt-14">
                            <img src={letsconn} alt="" />
                        </div>
                        <div className="mt-14">
                            <img src={guessNum} alt="" />
                        </div>
                        <div className="mt-14">
                            <img src={mikeDB} alt="" />
                        </div>
                        <div className="mt-14">Item</div>
                        <div className="mt-14">Item</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
