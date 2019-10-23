import React from 'react';
import { planetdata } from './planetdata';
import { allplanetweather } from './planetdata';
import { TodayBanner } from './sections/todaybanner';
import './App.css';
import { TodayDetail } from './sections/todaydetail';
import { UpcomingWeek } from './sections/upcomingweek';
import { Complain } from './sections/complain';
import { Complaining } from './sections/formcomplain';

const upComingWeekPage = 'UpcomingWeek'
const complainPage = 'Complain'

function App() {
  //below is about "state"
  const [currentPlanet, setCurrentPlanet] = React.useState(planetdata[0]); //default to zero
  const [currentPage, setCurrentPage] = React.useState(upComingWeekPage);
  //setCurrentPlanet is a function that we call to change the planet
  //currentPlanet is the variable

  return (
    <div className="App">
    
    {currentPage === upComingWeekPage &&
      <div>
        <TodayBanner currentPlanet={currentPlanet} planetList={planetdata} setCurrentPlanet={setCurrentPlanet} allplanetweather={allplanetweather}/>
        <TodayDetail currentPlanet={currentPlanet} planetList={planetdata} allplanetweather={allplanetweather}/>
        <UpcomingWeek currentPlanet={currentPlanet} planetList={planetdata} currentPage={currentPage} setCurrentPage={setCurrentPage} allplanetweather={allplanetweather}/>
        <Complain/>
      </div>}

    {currentPage === complainPage &&
      <div>
        <TodayBanner currentPlanet={currentPlanet} planetList={planetdata} setCurrentPlanet={setCurrentPlanet} allplanetweather={allplanetweather}/>
        <TodayDetail currentPlanet={currentPlanet} planetList={planetdata} allplanetweather={allplanetweather}/>
        <Complaining/>
        <Complain/>
      </div>}


    </div>
  );
}





export default App;
