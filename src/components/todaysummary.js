import React from 'react';
import { City } from '../elements/city';
import { Link } from '../elements/link';
import { Temperature } from '../elements/temperature';

export function TodaySummary(props) {
  
  var d = new Date();
  var n = d.getHours();
  if (n % 2 != 0) {
    n = n-1;
  }
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
          <Link location="Change"/>
          <Temperature currentplanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather} hour={n}/>
      </div>
    )
  }
