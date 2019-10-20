import React from 'react';
import { TodaySummary } from '../components/todaysummary';
import { Scroller } from '../components/scroller';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';

export function TodayBanner(props) {
    return (

      <div className='todayBannerClass'>
        <TodaySummary currentPlanet={props.currentPlanet}/>
        <Scroller currentPlanet={props.currentPlanet} planetList={props.planetList} setCurrentPlanet={props.setCurrentPlanet}/>
        <MiniTitle/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} day="Thursday"/>
      </div>
    )
  }