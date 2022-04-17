import React from 'react';
import './Knowledgebase.css';

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
            <div className="w-96 mt-32">
                <h1 className="text-3xl">Knowledgebase</h1>
                <div className="mt-10">
                    <p>
                        Although I have spent some time with Python, Java, &
                        Swift, my coding passion is mostly on the front-end.
                    </p>
                </div>
            </div>
        </div>
    );
}
