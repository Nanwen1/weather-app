import React from 'react';
import { Weekday } from '../elements/weekday';
import { TemperatureMaxMin } from '../elements/temperature';
import { SunSymbol } from '../elements/sunsymbol';

export function WeekdayDisplay(props) {
    return (
      <div className="weekdayDisplayClass">
        <div className="dayRowClass">
        <Weekday name={props.day}/>
            <div className="weekdayRowTempClass" >
              <SunSymbol/>
              <TemperatureMaxMin currentplanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather} day={props.day} limit="max"/> 
              <TemperatureMaxMin currentplanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather} day={props.day} limit="min"/>
            </div>
          </div>
      </div>
    )
  }
