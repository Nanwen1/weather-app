import React from 'react';
import { planetdata } from './planetdata';
import { allplanetweather } from './planetdata';
import { TodayBanner } from './sections/todaybanner';
import './App.css';
import { TodayDetail } from './sections/todaydetail';
import { UpcomingWeek } from './sections/upcomingweek';
import { Complain } from './sections/complain';
import { Complaining } from './sections/formcomplain';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { ReactComponent as ClearDay } from './weather-icons/clear-day.svg'
import { ReactComponent as Asteroid } from './weather-icons/asteroid-shower.svg'
import { ReactComponent as Cold } from './weather-icons/cold-solar-system.svg'
import { ReactComponent as Stormy } from './weather-icons/danger-zone.svg'
import { ReactComponent as VisitorsExpected } from './weather-icons/explorer-rocket.svg'
import { ReactComponent as Fine } from './weather-icons/fine-weather.svg'
import { ReactComponent as Lightning } from './weather-icons/really-fast-asteroid.svg'
import { ReactComponent as Cloudy } from './weather-icons/lot-of-orbits-today.svg'
import { ReactComponent as Departures } from './weather-icons/rocket-launch.svg'
import { ReactComponent as Cloudy2 } from './weather-icons/satelite.svg'
import { ReactComponent as Rain } from './weather-icons/sun-moving-towards-rain.svg'
import { ReactComponent as Sunny } from './weather-icons/sunny-day.svg'
import { ReactComponent as Windy} from './weather-icons/swirly-days.svg'
import { ReactComponent as Foggy } from './weather-icons/too-many-moons.svg'


const upComingWeekPage = 'UpcomingWeek'
const complainPage = 'Complain'

function App() {
  //below is about "state"
  const [currentPlanet, setCurrentPlanet] = React.useState(planetdata[0]); //default to zero
  //const [currentPage, setCurrentPage] = React.useState(upComingWeekPage);
  //setCurrentPlanet is a function that we call to change the planet
  //currentPlanet is the variable
  const listofsymbols = [<ClearDay/>,<Asteroid/>,<Cold/>,<Stormy/>,<VisitorsExpected/>,
    <Fine/>,<Lightning/>,<Cloudy/>,<Cloudy2/>,<Departures/>,<Rain/>,<Sunny/>,
    <Windy/>,<Foggy/>]
  var symbol= []

  for (let j = 0; j < 7; j++) {
    symbol[j] = listofsymbols[Math.floor(Math.random()*listofsymbols.length)];    
  } 



  return (
    <div className="App">
    <Router>
    <Route path = "/" exact >
          <div>
            <TodayBanner currentPlanet={currentPlanet} planetList={planetdata} setCurrentPlanet={setCurrentPlanet} allplanetweather={allplanetweather}/>
            <UpcomingWeek currentPlanet={currentPlanet} planetList={planetdata}  allplanetweather={allplanetweather} symbol={symbol} />
            <Complain/>
          </div>
      </Route>
      <Route path = "/weather" >
          <div>
            <TodayBanner currentPlanet={currentPlanet} planetList={planetdata} setCurrentPlanet={setCurrentPlanet} allplanetweather={allplanetweather}/>
            <UpcomingWeek currentPlanet={currentPlanet} planetList={planetdata} allplanetweather={allplanetweather} symbol={symbol} />
            <Complain/>
          </div>
      </Route>
      <Route path="/complain">
          <div>
            <TodayBanner currentPlanet={currentPlanet} planetList={planetdata} setCurrentPlanet={setCurrentPlanet} allplanetweather={allplanetweather}/>
            <Complaining/>
          </div>
        </Route>
      </Router>
    </div>
  );
}





export default App;
