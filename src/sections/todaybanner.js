import React from 'react';
import { TodaySummary } from '../components/todaysummary';
import { Scroller } from '../components/scroller';
import { WeekdayDisplay } from '../components/weekdaydisplay';

export function TodayBanner(props) {
    return (
      <div className='todayBannerClass'>
        <TodaySummary currentPlanet={props.currentPlanet}/>
        <Scroller currentPlanet={props.currentPlanet} planetList={props.planetList}/>
        <WeekdayDisplay currentPlanet={props.currentPlanet}/>
      </div>
    )
  }