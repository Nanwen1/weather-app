import React from 'react';

export function Field(props) {
    
    const { name, type } = props

    if (type === 'textarea') {
      return (
        <textarea className="entryFieldClass" name={name}></textarea>
      )
    }

    return (
      <input className="entryFieldClass" type={type} name={name} />
    )
  }
