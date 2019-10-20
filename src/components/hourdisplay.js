import React from 'react';
import { Temperature } from '../elements/temperature';
import { Hour } from '../elements/hour';


export function HourDisplay(props) {
    return (
        <div className="hourDisplayClass">
            <Hour/>
            <Temperature/>
        </div>
    )
  }