import React from 'react';
import { HourDisplay } from '../components/hourdisplay';

export function TodayDetail() {
    return (
      <div className='todayDetailClass'>
        This is the hours of the day
        <HourDisplay/>
      </div>
    )
  }