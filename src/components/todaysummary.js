import React from 'react';
import { City } from '../elements/city';
import { Link } from '../elements/link';
import { Temperature } from '../elements/temperature';



export function TodaySummary(props) {
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
          <Link/>
          <Temperature Temperature limit="current"/>
      </div>
    )
  }
