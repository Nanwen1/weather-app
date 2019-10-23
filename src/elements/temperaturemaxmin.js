import React from 'react';

  export function TemperatureMaxMin(props) {
    const currentplanet = props.currentplanet.name;
    const currenttemp = props.currentplanet.currenttemp;
    const allplanetweather = props.allplanetweather;
    const hour = props.hour;
    const day = props.day;

    return (
      <div>
        {allplanetweather.map(function() {
            const currentplanetbooleancheck = allplanetweather.name === currentplanet && allplanetweather.weather.day === day;
            if (currentplanetbooleancheck && props.limit==="max") {
                var max = allplanetweather.weather.temp[0];
                    {allplanetweather.weather.map(function() {    
                        if(max<allplanetweather.weather.temp){
                            max = allplanetweather.weather.temp
                            }
                        }
                    return(
                        <p className={`temperatureClass ${props.limit}`}>
                          {max}
                        </p>
                        )
                    }
                }
            else if (currentplanetbooleancheck && props.limit==="min") {
                var min = allplanetweather.weather.temp[0];
                    {allplanetweather.weather.map(function() {    
                        if(min>allplanetweather.weather.temp){
                            min = allplanetweather.weather.temp
                        }
                    }
                    return(
                        <p className={`temperatureClass ${props.limit}`}>
                          {min}
                        </p>
                    )
                    }
                }}
      </div>
    )
  }
