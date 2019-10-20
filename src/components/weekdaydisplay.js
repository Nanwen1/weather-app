import React from 'react';
import { Weekday } from '../elements/weekday';
import { Temperature } from '../elements/temperature';
import { SunSymbol } from '../elements/sunsymbol';

export function WeekdayDisplay(props) {
    return (
      <div className="weekdayDisplayClass">
        <div className="dayRowClass">
        <Weekday name={props.day}/>
            <div className="weekdayRowTempClass" >
              <SunSymbol/>
              <Temperature limit="max"/> 
              <Temperature limit="min"/>
            </div>
          </div>
      </div>
    )
  }