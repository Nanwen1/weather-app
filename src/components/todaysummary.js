import React from 'react';
import { City } from '../elements/city';
import { Link } from '../elements/link';
import { Temperature } from '../elements/temperature';


export function TodaySummary() {
    return (
      <div className="todaySummaryClass">
          <City/>
          <Link/>
          <Temperature/>
      </div>
    )
  }