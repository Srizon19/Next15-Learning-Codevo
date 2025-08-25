import Link from 'next/link';
import React from 'react'

const f_one = () => {
  return (
    <div>
        <div>f_one</div>
        <ul>
            <li><Link className='border rounded' href={"f_one/f_two"}>f_two</Link></li>
            <li><Link className='border rounded' href={"f_three"}>f_three</Link></li>
        </ul>
    </div>
  )
}

export default f_one;