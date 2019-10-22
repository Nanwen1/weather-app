import React from 'react';
import { Godprofile } from '../components/godprofile';
import { ComplainForm } from '../components/complainentries';

export function Complaining(props) {
    return (
      <div className='complainPageClass'>
        <Godprofile/>
        <ComplainForm/>
      </div>
    )
  }