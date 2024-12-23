import Card from "./components/Card/card";
// import weatherCard from './components/weatherCard/weatherCard';
import Navbar from "./components/NavBar/navbar";
import Weather from "./weather";
import TimezoneClock from "./timezone";
// import Loader from './components/Loader/loader';
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />

        <div className="cards">
          <Weather
            location="Athens, GR"
            time={<TimezoneClock timezone="Europe/Athens" />}
            city="Athens"
            face="twiggy"
          />

          <Weather
            location="Copenhagen, DK"
            time={<TimezoneClock timezone="Europe/Copenhagen" />}
            city="Copenhagen"
            face="ntina"
          />

          <Weather
            location="Athens, GR"
            time={<TimezoneClock timezone="Europe/Athens" />}
            city="Athens"
            face="hro"
          />

          <Weather
            location="Glasgow, UK"
            time={<TimezoneClock timezone="Europe/London" />}
            city="Glasgow"
            face="vana"
          />

          <Weather
            location="Mendrisio, CH"
            time={<TimezoneClock timezone="Europe/Zurich" />}
            city="Mendrisio"
            face="anna"
          />

          <Weather
            location="Athens, GR"
            time={<TimezoneClock timezone="Europe/Athens" />}
            city="Athens"
            face="tasos"
          />
        </div>

        <footer>
          <p>Designed and developed with &hearts; for my favourite people</p>
          <p>
            <a href="https://www.instagram.com/fish.wish/">Anna Freri</a>
          </p>
        </footer>

        <ul className="clouds">
          <li>
            <img src="/assets/cloud_gap.svg" alt="Circle" />
          </li>
          <li>
            <img src="/assets/cloud_gap.svg" alt="Circle" />
          </li>
          <li>
            <img src="/assets/cloud_gap.svg" alt="Circle" />
          </li>
          <li>
            <img src="/assets/cloud_gap.svg" alt="Circle" />
          </li>
          <li>
            <img src="/assets/cloud_gap.svg" alt="Circle" />
          </li>
          <li>
            <img src="/assets/cloud_gap.svg" alt="Circle" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
