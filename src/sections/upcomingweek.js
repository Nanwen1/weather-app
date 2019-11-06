import React from 'react';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';


export function UpcomingWeek(props) {
  var rows = []; 
  var d = new Date();
  var day = null;

  if (day == null){
    if (d.getDay() == 1){
      day  = "Monday";
    }
    else if (d.getDay() == 2){
      day  = "Tuesday";
    }
    else if (d.getDay() == 3){
      day  = "Wednesday";
    }
    else if (d.getDay() == 4){
      day  = "Thursday";
    }
    else if (d.getDay() == 5){
      var day  = "Friday";
    }
    else if (d.getDay() == 6){
      day  = "Saturday";
    }
    else if (d.getDay() == 0){
      day  = "Sunday";
    }
  }
  
  const today = day;
 
  const [whichDayDetail, setwhichDayDetail] = React.useState(today); 
  
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
    rows.push(<WeekdayDisplay currentPlanet={props.currentPlanet} allplanetweather={props.allplanetweather} planetList={props.planetList} day={day}  whichDayDetail={whichDayDetail} setwhichDayDetail={setwhichDayDetail}/>)
  }  

    return (
      <div className='upcomingWeekClass'>
        <MiniTitle location="Today:"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} allplanetweather={props.allplanetweather} day={today} whichDayDetail={whichDayDetail} setwhichDayDetail={setwhichDayDetail}/>
        <MiniTitle location="Upcoming:"/>
        <div>
          {rows}
        </div>
      </div>
    )
  }