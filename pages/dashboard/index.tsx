import AuthContent from 'components/AuthContent'
import DashboardNav from 'components/DashboardNav'
import Usercard from 'components/Usercard'
import Link from 'next/link'
//import React from 'react'
import Header from '../../components/Header'
interface Props { }

function Dashboard(props: Props) {
  const { } = props

  return (
    <>
      <AuthContent>
        <DashboardNav />
      </AuthContent>
    </>
  )
}

export default Dashboard

