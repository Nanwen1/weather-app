import React from 'react';
import { TodaySummary } from '../components/todaysummary';
import { Scroller } from '../components/scroller';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';

export function TodayBanner(props) {
  var d = new Date();
  var n = d.getHours();

  if (d.getDay() == 1){
    var day  = "Monday";
  }
  else if (d.getDay() == 2){
    var day  = "Tuesday";
  }
  else if (d.getDay() == 3){
    var day  = "Wednesday";
  }
  else if (d.getDay() == 4){
    var day  = "Thursday";
  }
  else if (d.getDay() == 5){
    var day  = "Friday";
  }
  else if (d.getDay() == 6){
    var day  = "Saturday";
  }
  else if (d.getDay() == 0){
    var day  = "Sunday";
  }


    return (

      <div className='todayBannerClass'>
        <TodaySummary currentPlanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather}/>
        <Scroller currentPlanet={props.currentPlanet} planetList={props.planetList} setCurrentPlanet={props.setCurrentPlanet}/>
        <MiniTitle location="Today:"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} allplanetweather={props.allplanetweather} day={day}/>
      </div>
    )
  }