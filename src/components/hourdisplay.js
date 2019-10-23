import React from 'react';
import { Temperature } from '../elements/temperature';
import { Hour } from '../elements/hour';
import { tsPropertySignature } from '@babel/types';


export function HourDisplay(props) {
    return (
        <div className="hourDisplayClass">
            <Hour hour={props.hour}/>
            <Temperature currentplanet={props.currentPlanet} planetList={props.planetList} allplanetweather={props.allplanetweather} hour={props.hour}/>
        </div>
    )
  }