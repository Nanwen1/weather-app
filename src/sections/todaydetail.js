import React from 'react';
import { HourDisplay } from '../components/hourdisplay';

export function TodayDetail(props) {
  var rows = []; 
  var hour = 0;
  var day = [];
  for (let index = 0; index < 12; index++) {
    rows.push(<HourDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather} hour={hour}/>)
    hour = hour+2;
  }  
  return (
    <div className='todayDetailClass'>
      {rows}
    </div>
  )
}