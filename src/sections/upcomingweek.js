import React from 'react';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';


export function UpcomingWeek(props) {
  var rows = []; 
  var day = "Wednesday";
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
    rows.push(<WeekdayDisplay currentPlanet={props.currentPlanet} planetList={props.planetList} day={day}/>)
  }  
    return (
      <div className='upcomingWeekClass'>
        <MiniTitle location="Upcoming:"/>
        {rows}
      </div>
    )
  }
