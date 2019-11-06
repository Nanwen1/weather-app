import React from 'react';
import { Weekday } from '../elements/weekday';
import { TemperatureMaxMin } from '../elements/temperaturemaxmin';
import { SunSymbol } from '../elements/sunsymbol';
import { TodayDetail } from '../sections/todaydetail';


export function WeekdayDisplay(props) {

  const showDetail = props.day === props.whichDayDetail ;
    return (
      <div className="weekdayDisplayClass">
        <div className="dayRowClass" onClick={() => props.setwhichDayDetail(props.day)}>
        <Weekday name={props.day}/>
            <div className="weekdayRowTempClass">
              <SunSymbol/>
              <TemperatureMaxMin currentplanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather} day={props.day} limit="max"/> 
              <TemperatureMaxMin currentplanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather} day={props.day} limit="min"/>
            </div>  
          </div>
          {showDetail &&
            <TodayDetail currentPlanet={props.currentPlanet} planetList={props.planetdata} allplanetweather={props.allplanetweather}/>
          }
        
      </div>
    )
  }