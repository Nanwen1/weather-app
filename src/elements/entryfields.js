import React from 'react';

export function Field(props) {
    
    const { name, type, set, value } = props

    const handleChange = (e) => {
      const value = e.target.value
      set(value)
    }

    if (type === 'textarea') {
      return (
        <textarea className="entryFieldClass" name={name} value={value} onChange={handleChange} />
      )
    }

    return (
      <input className="entryFieldClass" type={type} name={name} value={value} onChange={handleChange} />
    )
  }
