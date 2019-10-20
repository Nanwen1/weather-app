import React from 'react';
import { planetdata } from './planetdata';
import { TodayBanner } from './sections/todaybanner';
import './App.css';
import { TodayDetail } from './sections/todaydetail';
import { UpcomingWeek } from './sections/upcomingweek';
import { Complain } from './sections/complain';

function App() {
  const currentPlanet = planetdata[0];

  return (
    <div className="App">
        <TodayBanner currentPlanet={currentPlanet} planetList={planetdata}/>
        <TodayDetail currentPlanet={currentPlanet}/>
        <UpcomingWeek currentPlanet={currentPlanet}/>
        <Complain/>
    </div>
  );
}

export default App;
