import React from 'react';
import netlifyLogo from '../img/netlifyLogo.svg';
import tailwindLogo from '../img/tailwindLogo.svg';
import reactLogo from '../img/frameworkLogos/reactLogo.png';

export default function Footer() {
    return (
        <div>
            <div className="clear-both h-24 "></div>
            <div className="w-full footer-color h-20 md:h-14 text-sm md:text-md flex flex-wrap justify-center items-center text-white fixed bottom-0">
                This site was created using
                <img className="h-6 px-2" src={reactLogo} alt="" />
                <a
                    href="http://reactjs.org"
                    className="underline cursor-pointer pr-2"
                >
                    React
                </a>
                &
                <img className="h-4 pl-2" src={tailwindLogo} alt="" />
                <a
                    href="http://tailwindcss.org"
                    className="px-2 underline cursor-pointer"
                    target="_blank"
                >
                    Tailwind
                </a>
                , and served via
                <img className="h-5 pl-2" src={netlifyLogo} alt="" />{' '}
                <a
                    href="https://netlify.com"
                    className="px-2 underline cursor-pointer"
                    target="_blank"
                >
                    Netlify
                </a>
                .
            </div>
        </div>
    );
}
