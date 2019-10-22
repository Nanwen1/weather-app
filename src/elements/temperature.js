import React from 'react';

export function Temperature(props) {
  const currentplanet = props.currentplanet.name;
  const currenttemp = props.currentplanet.currenttemp;
    return (
      <p className={`temperatureClass ${props.limit}`}>
        {currenttemp}
      </p>
    )
  }
