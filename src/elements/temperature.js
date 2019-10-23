import React from 'react';

  export function Temperature(props) {
    const currentplanet = props.currentplanet.name;
    const currenttemp = props.currentplanet.currenttemp;
    const allplanetweather = props.allplanetweather;
    const hour = props.hour;
    return (
      <div>
        {allplanetweather.map(function() {
          const currentplanetbooleancheck = allplanetweather.name === currentplanet && allplanetweather.time === hour;
          if (currentplanetbooleancheck) {
            return(
              <p className={`temperatureClass`}>
                {allplanetweather.temp}
              </p>
            )
          }
            return(
            <p className={`temperatureClass`}>
              {currenttemp}
            </p>
            )
        })}
      </div>
    )
  }
