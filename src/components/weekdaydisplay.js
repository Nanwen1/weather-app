import React from 'react';
import { Weekday } from '../elements/weekday';
import { MiniTitle } from '../elements/minititle';
import { Temperature } from '../elements/temperature';
import { SunSymbol } from '../elements/sunsymbol';

export function WeekdayDisplay() {
    return (
      <div className="weekdayDisplayClass">
        <MiniTitle/>
        <div className="dayRowClass">
        <Weekday/>
            <div className="weekdayRowTempClass" >
              <SunSymbol/>
              <Temperature limit="max"/> 
              <Temperature limit="min"/>
            </div>
          </div>
      </div>
    )
  }