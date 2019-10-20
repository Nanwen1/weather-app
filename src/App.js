import React from 'react';
// import logo from './logo.svg';
import { TodayBanner } from './sections/todaybanner';
import './App.css';
import { TodayDetail } from './sections/todaydetail';
import { UpcomingWeek } from './sections/upcomingweek';
import { Complain } from './sections/complain';
/* <img src={logo} className="App-logo" alt="logo" /> */

function App() {
  return (
    <div className="App">
        <TodayBanner/>
        <TodayDetail/>
        <UpcomingWeek/>
        <Complain/>
    </div>
  );
}

export default App;
