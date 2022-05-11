import React from 'react';
import './About.css';
import seraphoto from '../img/seralynProfile02.webp';
import resume from '../docs/SeralynCampbell-CV-FrontendDev.pdf';
import rirekisho from '../docs/履歴書-キャンベル.pdf';
import eldenring from '../img/currently/Eldenring.png';
import moonlighter from '../img/currently/Moonlighter.png';

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

                <p className="mt-6">
                    I went on to working in talent management, photography,
                    casting, promotions for a VR-eSports-blockchain startup, and
                    most recently the Tokyo 2020 Olympics.
                </p>
                <p>
                    I am an avid PC gamer. Tokyo apartments are small, but if I
                    still had the space/network to do so, I would be continuing
                    my other hobbies of: SCUBA diving, fencing, brewing,
                    fermenting.
                </p>

                <div className="flex justify-evenly mt-12">
                    <div>
                        Currently Coding:
                        <a
                            href="https://github.com/Seralyn/codespaces-mockup"
                            className="underline"
                        >
                            <div>Github Codespaces Mockup</div>
                        </a>
                    </div>
                    <div>
                        Currently Playing:
                        <div className="">
                            <img
                                src={eldenring}
                                className="w-24 mt-3 inline mr-4 "
                                alt="Elden Ring"
                            />
                            <img
                                src={moonlighter}
                                className="w-20 mt-3 inline "
                                alt="Moonlighter"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-20">
                    <div>
                        <h1 className="text-3xl underline mb-4">Software</h1>
                        <div>
                            <ul className="list-disc w-fit flex flex-col justify-start items-start">
                                <li>VS Code</li>
                                <li>Hyper Terminal</li>
                                <li>YT Music</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Lightroom</li>
                                <li>Chrome, Firefox</li>
                                <li>MAMP</li>
                                <li>CodeKit</li>
                                <li>#Rainbow</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl underline">Hardware</h1>
                        <div className="flex justify-center gap-20 mt-6">
                            <div className="flex flex-col ml-32">
                                <h1 className="text-2xl">Coding</h1>
                                <ul className="list-disc w-fit flex flex-col justify-start items-start">
                                    <li>2019 16" MacBook Pro (Intel)</li>
                                    <li>Keychron K8 (browns)</li>
                                    <li>Apple Magic TrackPad 2</li>
                                    <li>LG 34" Ultrawide 144hz</li>
                                    <li>Acer 32" 144hz</li>
                                    <li>Apple Airpods Pro</li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl">Gaming</h1>
                                <ul className="list-disc w-fit flex flex-col justify-start items-start">
                                    <li>Intel Core i9 - 9900KF</li>
                                    <li>32GB Corsair DDR4-2666MHz</li>
                                    <li>ASUS Prime Z390-A Motherboard</li>
                                    <li>
                                        Corsair H100i RGB Platinum SE V2 Water
                                        Cooler
                                    </li>
                                    <li>LG 34" Ultrawide 144hz</li>
                                    <li>Acer 32" 144hz</li>
                                    <li>Corsair RM850x Power Supply</li>
                                    <li>
                                        Corsair Crystal 570X White RGB Middle
                                        Case
                                    </li>
                                    <li>Razer Blackwidow V2 Chroma (greens)</li>
                                    <li>Razer Basilisk Mouse</li>
                                    <li>Razer Nommo Chroma</li>
                                    <li>Corsair Void Pro</li>
                                    <li>Afterglow Controller</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
