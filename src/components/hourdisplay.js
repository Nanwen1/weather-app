import React from 'react';
import { Temperature } from '../elements/temperature';
import { SunSymbol } from '../elements/sunsymbol';
import { Hour } from '../elements/hour';


export function HourDisplay() {
    return (
        <div className="hourDisplayClass">
            <Hour/>
            <SunSymbol/>
            <Temperature/>
        </div>
    )
  }