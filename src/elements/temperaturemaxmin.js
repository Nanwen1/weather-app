import React from 'react';


  export function TemperatureMaxMin(props) {
    const currentplanet = props.currentplanet.name;
    const currenttemp = props.currentplanet.currenttemp;
    const allplanetweather = props.allplanetweather;
    const hour = props.hour;
    const day = props.day;

    return (
      <div>
        {allplanetweather.map(function(allplanetweatherindex) {
          const currentplanetbooleancheck = allplanetweatherindex.name === currentplanet 
          if (currentplanetbooleancheck){
            var max;
            var min;  
            var done = false;
            allplanetweatherindex.weather.map(function(weatherForPlanetIndex) {
            
              const isWeatherOnCurrentDay = weatherForPlanetIndex.day === day;
              if (isWeatherOnCurrentDay && done === false ) { 
                max = weatherForPlanetIndex.temp;
                min = weatherForPlanetIndex.temp;
                done = true;
              }

              if (isWeatherOnCurrentDay) { 
                  if (max<weatherForPlanetIndex.temp) {
                    max = weatherForPlanetIndex.temp
                  }
                  if (min>weatherForPlanetIndex.temp) {
                    min = weatherForPlanetIndex.temp
                  }
              }
            })
            if (props.limit==="max") {
              return (
                <p className={`temperatureClass ${props.limit}`}>
                  {max}
                </p>
              )
            }
            if (props.limit==="min") {
              return (
                <p className={`temperatureClass ${props.limit}`}>
                  {min}
                </p>
                )
              }
            }
          return (<></>)
        })}
      </div>
    )
  }
