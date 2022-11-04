import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Usercard from './Usercard'

interface Props { }

function DashboardNav(props: Props) {
  const { } = props
  const router = useRouter()
  console.log(router)

  return (
    <div className='container'>
      <Usercard />
      <div className="row mt-5">
        <div className="col-md-2">
          <Link href="/dashboard/recent">
            <a className={`text-decoration-none dashboard-link  ${router.asPath === '/dashboard/recent' ? 'active' : ''}`}>
              Recently Viewed
            </a>
          </Link>
        </div>

        <div className="col-md-2">
          <Link href="/dashboard/collections">
            <a className={`text-decoration-none dashboard-link  ${router.asPath === '/dashboard/collections' ? 'active' : ''}`}>
              Collections
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav
