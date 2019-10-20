import React from 'react';

import { ReactComponent as ClearDay } from '../weather-icons/clear-day.svg'
import { ReactComponent as Asteroid } from '../weather-icons/asteroid-shower.svg'
import { ReactComponent as Cold } from '../weather-icons/cold-solar-system.svg'
import { ReactComponent as Stormy } from '../weather-icons/danger-zone.svg'
import { ReactComponent as VisitorsExpected } from '../weather-icons/explorer-rocket.svg'
import { ReactComponent as Fine } from '../weather-icons/fine-weather.svg'
import { ReactComponent as Lightning } from '../weather-icons/really-fast-asteroid.svg'
import { ReactComponent as Cloudy } from '../weather-icons/lot-of-orbits-today.svg'
import { ReactComponent as Departures } from '../weather-icons/rocket-launch.svg'
import { ReactComponent as Cloudy2 } from '../weather-icons/satelite.svg'
import { ReactComponent as Rain } from '../weather-icons/sun-moving-towards-rain.svg'
import { ReactComponent as Sunny } from '../weather-icons/sunny-day.svg'
import { ReactComponent as Windy} from '../weather-icons/swirly-days.svg'
import { ReactComponent as Foggy } from '../weather-icons/too-many-moons.svg'

export function SunSymbol(props) {
  const listofsymbols = [<ClearDay/>,<Asteroid/>,<Cold/>,<Stormy/>,<VisitorsExpected/>,
    <Fine/>,<Lightning/>,<Cloudy/>,<Cloudy2/>,<Departures/>,<Rain/>,<Sunny/>,
    <Windy/>,<Foggy/>]
    var symbol= listofsymbols[Math.floor(Math.random()*listofsymbols.length)];
  return (
      <div className="sunSymbolClass" >{
        symbol
      }
      </div>
    )
  }