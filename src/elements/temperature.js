import React from 'react';

  export function Temperature(props) {
    const currentplanet = props.currentplanet.name;
    const currenttemp = props.currentplanet.currenttemp;
    const allplanetweather = props.allplanetweather;
    const hour = props.hour;
    return (
      <div>
        {allplanetweather.map(function(allplanetweatherIndex) {
          const currentplanetbooleancheck = allplanetweather.name === currentplanet
          if (currentplanetbooleancheck) {

            return allplanetweather.weather.map(function(weatherIndex) {
              const currentplanetbooleancheck2 = weatherIndex.time === hour
                if (currentplanetbooleancheck2) {
                  return(
                    <p className={`temperatureClass`}>
                      {allplanetweather.weather.temp}
                    </p>
                  )
                }
                return (
                  <p className={`temperatureClass`}>
                    {currenttemp}
                  </p>
                )
            })
          }
        })}
      </div>
    )
  }