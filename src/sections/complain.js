import React from 'react';
import { MiniTitle } from '../elements/minititle';
import { Link } from 'react-router-dom';


export function Complain(props) {
    return (
      <div className='complainClass'>
        <MiniTitle location="Don't like the weather?"/>
        <Link to="/complain" className="linkClass">Complain to God</Link>
      </div>
    )
  }

