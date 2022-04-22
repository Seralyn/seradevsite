import React from 'react';
import './About.css';
import seraphoto from '../img/seralynProfile02.webp';
import resume from '../docs/SeralynCampbell-CV-FrontendDev.pdf';
import rirekisho from '../docs/履歴書-キャンベル.pdf';

export default function About() {
    return (
        <div className="text-orange-300 flex flex-col items-center">
            <div className="mt-32 w-full">
                <h1 className="text-3xl">About</h1>

                <div className="flex flex-wrap flex-row-reverse justify-center items-center mt-14 mx-6">
                    <div className="w-80 rounded-3xl shadow-lg shadow-orange-300 overflow-hidden mt-8 mb-10 ml-10 mr-14">
                        <img src={seraphoto} alt="" />
                    </div>
                    <div className="">
                        <p className="py-2 text-xl">
                            Hello, My name is Seralyn.
                        </p>
                        <p className="py-2 text-xl">
                            I'm a frontend developer.
                        </p>
                        <p className="py-2 text-xl">
                            I like to design and develop websites.
                        </p>
                        <div className="flex justify-around">
                            <div className="btn-alt mt-10">
                                <a href={resume} download>
                                    Download CV
                                </a>
                            </div>
                            <div className="btn-alt mt-10 mx-5">
                                <a href={rirekisho} download>
                                    日本語履歴書
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 w-3/5">
                <p>
                    I love creating- whether it be websites, visual art, music,
                    food, outfits- the act of creation makes me excited. I also
                    love technology. I began developing dinky little websites
                    and rendering 3D scenes in Bryce3D in my early teens.
                </p>
                <p className="mt-6">
                    I have had a very non-linear career path. Before moving to
                    Japan, I was a small business owner in Memphis, TN and then
                    a sommelier in NYC. After moving to Japan, I have had a
                    variety of freelance jobs in varying industries. As many do,
                    I began my life here in Tokyo as an English teacher.
                </p>
                <p className="mt-14">
                    <h1 className="text-3xl underline">Fun Facts</h1>
                    <div>
                        <ul className="list-disc w-fit flex flex-col justify-start items-start">
                            <li>
                                I had 6 majors in college: Computer Science,
                                Ancient History, Romance Languages, Wine, Fine
                                Arts, Japanese
                            </li>
                            <li>
                                I have built every desktop PC I've ever owned
                            </li>
                            <li>
                                I live with three Leopard Geckos named: Tiamat,
                                Arke, & Iris
                            </li>
                            <li>
                                I am fluent in Japanese and speak Spanish
                                conversationally
                            </li>
                            <li>Certified Open-Water Scuba Diver with PADI</li>
                        </ul>
                    </div>
                </p>
            </div>
        </div>
    );
}
