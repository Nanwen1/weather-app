import React from 'react';
import { TodaySummary } from '../components/todaysummary';
import { Scroller } from '../components/scroller';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';

export function TodayBanner(props) {
  var d = new Date();
  var n = d.getHours();

    return (

      <div className='todayBannerClass'>
        <TodaySummary currentPlanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather}/>
        <Scroller currentPlanet={props.currentPlanet} planetList={props.planetList} setCurrentPlanet={props.setCurrentPlanet}/>
        <MiniTitle location="Today:"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} allplanetweather={props.allplanetweather} day="Thursday"/>
      </div>
    )
  }