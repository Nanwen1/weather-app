import React from 'react';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';


export function UpcomingWeek(props) {
  var rows = []; 
  var d = new Date();
  
  if (d.getDay() == 0){
    var day  = "Monday";
  }
  else if (d.getDay() == 1){
    var day  = "Tuesday";
  }
  else if (d.getDay() == 2){
    var day  = "Wednesday";
  }
  else if (d.getDay() == 3){
    var day  = "Thursday";
  }
  else if (d.getDay() == 4){
    var day  = "Friday";
  }
  else if (d.getDay() == 5){
    var day  = "Saturday";
  }
  else if (d.getDay() == 6){
    var day  = "Sunday";
  }
  
  
  for (let index = 0; index < 6; index++) {
    if (day == "Monday"){
      day = "Tuesday";
    }
    else if (day == "Tuesday"){
      day = "Wednesday";
    }
    else if (day == "Wednesday"){
      day = "Thursday";
    }
    else if (day == "Thursday"){
      day = "Friday";
    }
    else if (day == "Friday"){
      day = "Saturday";
    }
    else if (day == "Saturday"){
      day = "Sunday";
    }
    else {
      day = "Monday";
    }
    rows.push(<WeekdayDisplay currentPlanet={props.currentPlanet} allplanetweather={props.allplanetweather} planetList={props.planetList} day={day}/>)
  }  
    return (
      <div className='upcomingWeekClass'>
        <MiniTitle location="Upcoming:"/>
        {rows}
      </div>
    )
  }
