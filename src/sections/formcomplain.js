import React from 'react';
import { Godprofile } from '../components/godprofile';
import { ComplainForm } from '../components/complainentries';
import { Link } from 'react-router-dom';

export function Complaining(props) {
    return (
      <div className='complainPageClass'>
        <Godprofile/>
        <ComplainForm/>
        <Link to="/weather" className="linkClass">Back to weather</Link>
      </div>
    )
  }