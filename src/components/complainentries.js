import React from 'react';
import { MiniTitle} from '../elements/minititle';
import { Field } from '../elements/entryfields';
import { Button } from '../elements/button';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}



export function ComplainForm(props) {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [complaint, setComplaint] = React.useState('')


    const handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    return (
        <div className="hourDisplayClass">
          <form name="complaint-form" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <div>
              <MiniTitle location="Your name"/>
              <Field name="name" type="text" set={setName} value={name} />
            </div>
            <div>
              <MiniTitle location="Email"/>
              <Field name="email" type="email" set={setEmail} value={email} />
            </div>
            <div>
              <MiniTitle location="Complaint" />
              <Field name="complain" type="textarea" set={setComplaint} value={complaint} />
            </div>
            <Button/>
          </form>
        </div>
    )
  }