import React from 'react';
export function MiniTitle(props) {
  const location = props.location;
    return (
      <p className="miniTitleClass">
          {location}
      </p>
    )
  }