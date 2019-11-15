import React from 'react';

  export function Temperature(props) {
    const currentplanet = props.currentplanet.name;
    const allplanetweather = props.allplanetweather;
    const hour = props.hour;

    return (
      <div>
        {allplanetweather.map(function(allplanetweatherindex) {
          const currentplanetbooleancheck = allplanetweatherindex.name === currentplanet
          if (currentplanetbooleancheck) {
             return (
                 <>
                     {allplanetweatherindex.weather.map(function(weatherForPlanetIndex) {
                          const isWeatherOnCurrentDay = weatherForPlanetIndex.day === props.day;
                          const isHourOntheRightHour = weatherForPlanetIndex.time === hour;
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