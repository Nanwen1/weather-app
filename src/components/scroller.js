import React from 'react';


export function Scroller(props) {
  const planetList = props.planetList;
  const currentPlanet = props.currentPlanet;
  
  return (
      <div className="scrollerClass">
        {planetList.map(function(planetlistindex) {
          const currentplanetbooleancheck = currentPlanet.name === planetlistindex.name;//
          if (currentplanetbooleancheck) {
            return(
              <div className = "highlightedDotClass">
              </div>
            )
            }
          return(
            <div className = "dotClass">
            </div>
          )
        })}
      </div>
    )
  }