import React from "react";
import "./About.css";
import seraphoto from "../img/seralyn.jpg";

export default function About() {
  return (
    <div className="text-orange-300 flex flex-col items-center">
      <div className="mt-32 w-full">
        <h1 className="text-3xl">About</h1>
        <div className="flex justify-center items-center mt-14">
          <div className="mt-20">
            <p className="py-2 text-xl">Hello, My name is Seralyn.</p>
            <p className="py-2 text-xl">I'm a frontend developer.</p>
            <p className="py-2 text-xl">
              I like to design and develop websites.
            </p>
          </div>
          <div className="w-80 ml-20 rounded-xl shadow-2xl overflow-hidden">
            <img src={seraphoto} />
          </div>
        </div>
      </div>
    </div>
  );
}
