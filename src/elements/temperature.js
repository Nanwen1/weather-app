import React from 'react';
export function Temperature(props) {
    return (
      <p className={`temperatureClass ${props.limit}`}>
        10&deg;
      </p>
    )
  }