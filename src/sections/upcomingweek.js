import React from 'react';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';


export function UpcomingWeek(props) {
    return (
      <div className='upcomingWeekClass'>
        <MiniTitle location="Upcoming:"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} day="Friday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} day="Saturday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} day="Sunday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} day="Monday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} day="Tuesday"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} day="Wednesday"/>
      </div>
    )
  }