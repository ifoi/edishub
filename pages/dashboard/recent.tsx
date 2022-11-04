import DashboardNav from 'components/DashboardNav'
import React from 'react'

interface Props { }

function RecentlyViewed(props: Props) {
  const { } = props

  return (
    <div className='container'>
      <DashboardNav />
      <h1>Recently Viewed!</h1>
    </div>
  )
}

export default RecentlyViewed
