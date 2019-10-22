import React from 'react';
import { HourDisplay } from '../components/hourdisplay';

export function TodayDetail(props) {
  var rows = []; 
  for (let index = 0; index < 12; index++) {
    rows.push(<HourDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather}/>)
  }  
  return (
    <div className='todayDetailClass'>
      {rows}
    </div>
  )
}