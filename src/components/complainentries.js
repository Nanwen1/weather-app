import React from 'react';
import { MiniTitle} from '../elements/minititle';
import { Field } from '../elements/entryfields';
import { Button } from '../elements/button';

export function ComplainForm(props) {
    return (
        <div className="hourDisplayClass">
          <form name="complaint-form" method="POST" data-netlify="true">
            <div>
              <MiniTitle location="Your name"/>
              <Field name="name" type="text" />
            </div>
            <div>
              <MiniTitle location="Email"/>
              <Field name="email" type="email" />
            </div>
            <div>
              <MiniTitle location="Complaint"/>
              <Field name="complain" type="textarea" />
            </div>
            <Button/>
          </form>
        </div>
    )
  }