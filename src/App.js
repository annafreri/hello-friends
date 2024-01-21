import Card from './components/Card/card';
import Navbar from './components/NavBar/navbar';
import Weather from './weather'
import TimezoneClock from "./timezone";
import Loader from './components/Loader/loader';
import React, { useState, useEffect } from 'react';



import clo from '../src/assets/clo.svg';
import tasos from '../src/assets/tasos.svg';
import anna from '../src/assets/anna.svg';
import ntina from '../src/assets/ntina.svg';
import hro from '../src/assets/hro.svg';
import vana from '../src/assets/vana.svg';

import clouds from '../src/assets/snow.svg';


function App() {
  
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(false);
  //   };

  //   window.addEventListener('load', handleLoad);

  //   // Clean up the event listener when the component unmounts

  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []); // Empty dependency array, runs once when component mounts

  
  return (
    <div className="App">
        {/* {loading ? <Loader /> : null} */}
        {/* <Loader /> */}
        <div className='container'>
          <Navbar/>
          
          <div className='cards'>
            <Card
              location = 'Athens, GR'
              time = {<TimezoneClock timezone="Europe/Athens" />}
              temp = {<Weather city="Athens" />}
              face = {tasos}
              mainWeather = {clouds}
              
              // mainWeather = {<Weather mainWeather={weatherData.weather[0].main} />}
            />
            <Card
              location = 'Mendrisio, CH'
              time = {<TimezoneClock timezone="Europe/Zurich" />}
              temp = {<Weather city="Mendrisio" />}
              face = {anna}
            />      
            <Card
              location = 'Copenhagen, DK'
              time = {<TimezoneClock timezone="Europe/Copenhagen" />}
              temp = {<Weather city="Copenhagen" />}
              face = {ntina}
            />   
            <Card
              location = 'Athens, GR'
              time = {<TimezoneClock timezone="Europe/Athens" />}
              temp = {<Weather city="Athens" />}
              face = {hro}
            />
            <Card
              location = 'Glasgow, UK'
              time = {<TimezoneClock timezone="Europe/London" />}
              temp = {<Weather city="Glasgow" />}
              face = {vana}
            />      
            <Card
              location = 'Athens, GR'
              time = {<TimezoneClock timezone="Europe/Athens" />}
              temp = {<Weather city="Athens" />}
              face = {clo}
            />   

            

          </div>

          <footer>
            <p>Designed and developed with &hearts; for my favourite people</p>
            <p><a href='https://www.instagram.com/fish.wish/'>Anna Freri</a></p>
          </footer>
        
        <ul className="clouds">
                    <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li>
                    {/* <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li> */}
                    <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li>
                    {/* <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li> */}
                    <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li>
                    {/* <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li> */}
                    <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li>
                    {/* <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li> */}
                    <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li>
                    <li><img src="/assets/cloud_gap.svg" alt="Circle" /></li>
          </ul>
          </div>
    </div>
  );
}

export default App;
