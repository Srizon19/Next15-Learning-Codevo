import Link from 'next/link'
import React from 'react'

const InnerFTwo = () => {
  return (
    <div>
        <h1>InnerFTwo</h1>
        <Link className='border rounded mr-2' href={"/f_one/inner-f-one"}>Inner F One</Link>
        <Link className='border rounded' href={"/f_four"}>F FOur</Link>
    </div>
  )
}

export default InnerFTwo