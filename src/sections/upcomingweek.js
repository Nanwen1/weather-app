import React from 'react';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';


export function UpcomingWeek(props) {
    return (
      <div className='upcomingWeekClass'>
        <MiniTitle/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} day="Friday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} day="Saturday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} day="Sunday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} day="Monday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} day="Tuesday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} day="Wednesday"/>
      </div>
    )
  }