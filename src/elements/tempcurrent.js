import React from 'react';

  export function TemperatureCurrent(props) {
    const currentplanet = props.currentplanet.name;
    const allplanetweather = props.allplanetweather;
    var d = new Date();
    var hour = d.getHours();

    if( hour%2 != 0 ) {
        hour=hour-1;
    }

    if (d.getDay() == 1){
      var day  = "Monday";
    }
    else if (d.getDay() == 2){
      var day  = "Tuesday";
    }
    else if (d.getDay() == 3){
      var day  = "Wednesday";
    }
    else if (d.getDay() == 4){
      var day  = "Thursday";
    }
    else if (d.getDay() == 5){
      var day  = "Friday";
    }
    else if (d.getDay() == 6){
      var day  = "Saturday";
    }
    else if (d.getDay() == 0){
      var day  = "Sunday";
    }

    return (
      <div>
        {allplanetweather.map(function(allplanetweatherindex) {
          const currentplanetbooleancheck = allplanetweatherindex.name === currentplanet
          if (currentplanetbooleancheck) {
             return (
                 <>
                     {allplanetweatherindex.weather.map(function(weatherForPlanetIndex) {
                          const isWeatherOnCurrentDay = weatherForPlanetIndex.day === day;
                          const isHourOntheRightHour = weatherForPlanetIndex.time === hour;
                          console.log(weatherForPlanetIndex.day);
                            if (isWeatherOnCurrentDay && isHourOntheRightHour) {
                              return(
                                <p className="temperatureClass">
                                  {weatherForPlanetIndex.temp}
                                </p>
                              )  
                          }
                        return null
                      })}
                 </>
             )
          }
        })}
      </div>
    )
}