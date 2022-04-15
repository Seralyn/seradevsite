import React from "react";
import "./LandingPage.css";
import seraphoto from "./../img/seralyn01.jpeg";
import logo from "../logo.svg";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <img
          className="rounded-lg shadow-2xl shadow-green-400 w-64"
          src={seraphoto}
        />
      </div>
      <p className="text-green-300 mt-6">Hi, I'm Seralyn.</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
