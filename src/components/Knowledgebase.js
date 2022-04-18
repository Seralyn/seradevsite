import React from 'react';
import './Knowledgebase.css';
import bootstrap from '../img/frameworkLogos/bootstrapLogo.png';
import gsap from '../img/frameworkLogos/greensockLogo.svg';
import jquery from '../img/frameworkLogos/jqueryLogo.png';
import nodejs from '../img/frameworkLogos/nodejs-new-pantone-black.svg';
import react from '../img/frameworkLogos/reactLogo.png';
import sass from '../img/frameworkLogos/sassLogo.png';
import tailwind from '../img/frameworkLogos/tailwindcss-logotype.svg';

export default function Knowledgebase() {
    // const frameworkImages = [
    //     { imageName: 'ajax', width: 200 },
    //     { imageName: 'jquery', width: 200 },
    //     { imageName: 'bootstrap', width: 200 },
    //     { imageName: 'tailwind', width: 200 },
    //     { imageName: 'nodejs', width: 200 },
    //     { imageName: 'sass', width: 200 },
    //     { imageName: 'react', width: 200 },
    //     { imageName: 'gsap', width: 200 },
    // ];

    // frameworkImages.map((img) => {
    //     const capitalizedName = img.name[0].toUpperCase() + img.name.slice(1);
    //     return `${capitalizedName} images - ${img.width}`;
    // });

    return (
        <div className="text-blue-300 flex flex-col items-center">
            <div className="mt-32">
                <h1 className="text-3xl">Knowledgebase</h1>
                <div className="mt-10">
                    <p>
                        Although I have spent some time with Python, Java, &
                        Swift, my coding passion is mostly on the front-end.
                    </p>
                </div>
                <div
                    id="framework-logo-container"
                    className="flex gap-8 flex-wrap justify-evenly items-center p-20"
                >
                    <div>
                        <img className="h-44 w-44" src={bootstrap} alt="" />
                    </div>
                    <div>
                        <img className="w-96 py-10" src={tailwind} alt="" />
                    </div>
                    <div>
                        <img className="w-96 py-10" src={jquery} alt="" />
                    </div>
                    <div>
                        <img className="h-32 w-44" src={sass} alt="" />
                    </div>
                    <div>
                        <img className="w-60" src={nodejs} alt="" />
                    </div>
                    <div>
                        <img className="w-96" src={gsap} alt="" />
                    </div>
                    <div>
                        <img className="w-60" src={react} alt="" />
                    </div>
                    <div>
                        <img
                            width="256"
                            alt="AJAX logo by gengns"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/AJAX_logo_by_gengns.svg/256px-AJAX_logo_by_gengns.svg.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
