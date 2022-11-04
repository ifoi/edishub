import Link from 'next/link'
import React from 'react'
import Usercard from './Usercard'

interface Props { }

function DashboardNav(props: Props) {
  const { } = props

  return (
    <div className='container'>
      <Usercard />
      <div className="row mt-5">
        <div className="col-md-2">
          <Link href="/dashboard/recent">
            <a className='decoration-none'>
              Recently Viewed
            </a>
          </Link>
        </div>

        <div className="col-md-2">
          <Link href="/dashboard/collections">
            <a>
              Collections
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav
