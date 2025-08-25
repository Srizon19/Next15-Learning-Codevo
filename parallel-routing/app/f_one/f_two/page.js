import Link from 'next/link'
import React from 'react'

const f_two = () => {
  return (
    <div>
        <div>f_two</div>
        <Link href={'/f_four'}>f_four</Link>
    </div>
  )
}

export default f_two