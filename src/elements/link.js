import React from 'react';

export function Link(props) {
  const location = props.location;
  const currentpage  = props.currentPage;

  function handleClick(event) {
    event.preventDefault()
    if (currentpage === 'UpcomingWeek'){
      props.setCurrentPage('Complain')
    } else {
      props.setCurrentPage('UpcomingWeek')
    }
  }

    return (
      <a href="" className="linkClass" onClick={handleClick}>
          {location}
      </a>
    )
  }
