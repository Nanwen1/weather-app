import React from 'react';
export function Link(props) {
  const location = props.location
    return (
      <a href="" className="linkClass">
        {location}
      </a>
    )
  }
