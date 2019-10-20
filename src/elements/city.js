import React from 'react';

export function City(props) {
    const planetname = props.planet;
    return (
      <h1 className="cityClass">
        {planetname}
      </h1>
    )
  }
