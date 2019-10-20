import React from 'react';
import { TodaySummary } from '../components/todaysummary';
import { Scroller } from '../components/scroller';
import { WeekdayDisplay } from '../components/weekdaydisplay';

export function TodayBanner() {
    return (
      <div className='todayBannerClass'>
        <TodaySummary/>
        <Scroller/>
        <WeekdayDisplay/>
      </div>
    )
  }