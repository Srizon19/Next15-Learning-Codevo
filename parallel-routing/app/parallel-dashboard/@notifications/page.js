import Link from 'next/link'
import React from 'react'

const Notifications = () => {
  return (
    <div>
        <ul>
            <li><Link href={"/parallel-dashboard/default-notifications"}>Default Notifications</Link></li>
            <li><Link href={"/parallel-dashboard/archived-notifications"}>Archived Notifications</Link></li>
        </ul>
    </div>
  )
}

export default Notifications