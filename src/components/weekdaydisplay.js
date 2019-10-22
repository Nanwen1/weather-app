import React from 'react';
import { Weekday } from '../elements/weekday';
import { Temperature } from '../elements/temperature';
import { SunSymbol } from '../elements/sunsymbol';

export function WeekdayDisplay(props) {
    return (
      <div className="weekdayDisplayClass">
        <div className="dayRowClass">
        <Weekday name={props.day}/>
            <div className="weekdayRowTempClass" >
              <SunSymbol/>
              <Temperature currentplanet={props.currentPlanet} planetList={props.planetList} limit="max"/> 
              <Temperature currentplanet={props.currentPlanet} planetList={props.planetList} limit="min"/>
            </div>
          </div>
      </div>
    )
  }
