import React from 'react';

export function Link(props) {
  const location = props.location;
  const currentPage  = props.currentPage;

  function handleClick(event) {

    if (currentPage === 'UpcomingWeek'){
      props.setCurrentPage('Complain')
    } else {
      props.setCurrentPage('UpcomingWeek')
    }
    event.preventDefault()
  }

    return (
      <a href="" className="linkClass" onClick={handleClick}>
          {location}
      </a>
    )
  }
