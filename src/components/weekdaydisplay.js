import React from 'react';
import { Weekday } from '../elements/weekday';
import { MiniTitle } from '../elements/minititle';
import { Temperature } from '../elements/temperature';
import { SunSymbol } from '../elements/sunsymbol';

export function WeekdayDisplay() {
    return (
      <div>
        <MiniTitle/>
        <Weekday/>
        <SunSymbol/>
        <Temperature/>
        <Temperature/>
      </div>
    )
  }