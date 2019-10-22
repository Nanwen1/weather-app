import React from 'react';
import { MiniTitle} from '../elements/minititle';
import { Field } from '../elements/entryfields';
import { Button } from '../elements/button';

export function ComplainForm(props) {
    return (
        <div className="hourDisplayClass">
          <MiniTitle location="Your name"/>
          <Field/>
          <MiniTitle location="Email"/>
          <Field/>
          <MiniTitle location="Complaint"/>
          <Field/>
        <Button/>
        </div>
    )
  }