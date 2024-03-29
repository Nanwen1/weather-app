import React from 'react';
import { City } from '../elements/city';
import { TemperatureCurrent } from '../elements/tempcurrent';

export function TodaySummary(props) {
  var d = new Date();
  const currenthour = d.getHours();

  const styles = {
    [`background-image`]: `url(${props.currentPlanet.image})`
  }
    return (
      <div className="todaySummaryClass" style={styles}>
          <City planet={props.currentPlanet.name}/>
          {props.currentPlanet.name =="Pluto"
           && <p>
          "#stillAPlanet"
      </p>}
          <TemperatureCurrent currentplanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather} currenthour={currenthour}/>
      </div>
    )
  }
