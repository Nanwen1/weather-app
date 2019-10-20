import React from 'react';
import { WeekdayDisplay } from '../components/weekdaydisplay';

export function UpcomingWeek() {
    return (
      <div className='upcomingWeekClass'>
        This is the weekday section
        <WeekdayDisplay/>
      </div>
    )
  }