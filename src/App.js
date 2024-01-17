import Card from './components/Card/card';
import Navbar from './components/NavBar/navbar';
import Weather from './weather'
import TimezoneClock from "./timezone";


import clo from '../src/assets/clo.svg';
import tasos from '../src/assets/tasos.svg';
import anna from '../src/assets/anna.svg';
import ntina from '../src/assets/ntina.svg';
import hro from '../src/assets/hro.svg';
import vana from '../src/assets/vana.svg';


function App() {
  return (
    <div className="App">
        <div className='container'>
          <Navbar/>
          
          <div className='cards'>
            <Card
              location = 'Athens, GR'
              time = {<TimezoneClock timezone="Europe/Athens" />}
              temp = {<Weather city="Athens" />}
              face = {tasos}
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
        </div>
    
    </div>
  );
}

export default App;
