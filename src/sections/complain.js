import React from 'react';
import { MiniTitle } from '../elements/minititle';
import { Link } from '../elements/link';

export function Complain() {
    return (
      <div className='complainClass'>
        <MiniTitle location="Don't like the weather?"/>
        <Link location="Complain to God" currentPage={currentPage}/>
      </div>
    )
  }