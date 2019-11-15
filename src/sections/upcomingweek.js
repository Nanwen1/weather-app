import React from 'react';
import { WeekdayDisplay } from '../components/weekdaydisplay';
import { MiniTitle } from '../elements/minititle';

export function UpcomingWeek(props) {
  var rows = []; 
  var d = new Date();
  var day = null;

  var weekindex = undefined;

  if (day == null){
    if (d.getDay() == 1){
      day  = "Monday";
      weekindex = 0;
    }
    else if (d.getDay() == 2){
      day  = "Tuesday";
      weekindex = 1;
    }
    else if (d.getDay() == 3){
      day  = "Wednesday";
      weekindex = 2;
    }
    else if (d.getDay() == 4){
      day  = "Thursday";
      weekindex = 3;
    }
    else if (d.getDay() == 5){
      var day  = "Friday";
      weekindex = 4;
    }
    else if (d.getDay() == 6){
      day  = "Saturday";
      weekindex = 5;
    }
    else if (d.getDay() == 0){
      day  = "Sunday";
      weekindex = 6;
    }
  }
  
  const today = day;
 
  const [whichDayDetail, setwhichDayDetail] = React.useState(today); 
  
  for (let index = 0; index < 6; index++) {
    if (day == "Monday"){
      day = "Tuesday";
      weekindex = 0;
    }
    else if (day == "Tuesday"){
      day = "Wednesday";
      weekindex = 1;
    }
    else if (day == "Wednesday"){
      day = "Thursday";
      weekindex = 2;
    }
    else if (day == "Thursday"){
      day = "Friday";
      weekindex = 3;
    }
    else if (day == "Friday"){
      day = "Saturday";
      weekindex = 4;
    }
    else if (day == "Saturday"){
      day = "Sunday";
      weekindex = 5;
    }
    else {
      day = "Monday";
      weekindex = 6;
    }
    rows.push(<WeekdayDisplay currentPlanet={props.currentPlanet} allplanetweather={props.allplanetweather} planetList={props.planetList} day={day} symbol={props.symbol} index={weekindex} whichDayDetail={whichDayDetail} setwhichDayDetail={setwhichDayDetail}/>)
  }  

    return (
      <div className='upcomingWeekClass'>
        <MiniTitle location="Today:"/>
        <WeekdayDisplay currentPlanet={props.currentPlanet} allplanetweather={props.allplanetweather} day={today} symbol={props.symbol} index={weekindex} whichDayDetail={whichDayDetail} setwhichDayDetail={setwhichDayDetail}/>
        <MiniTitle location="Upcoming:"/>
        <div>
          {rows}
        </div>
      </div>
    )
  }