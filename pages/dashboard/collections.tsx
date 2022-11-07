import DashboardNav from 'components/DashboardNav'
// import React from 'react'

import CollectionItemsContainer from 'components/collections/CollectionItemsContainer' ;

interface Props { }

function Collections(props: Props) {
  const { } = props

  return (
    <div className='container'>
      <DashboardNav />
      <h1>collections</h1>
      
      <CollectionItemsContainer />

    </div>
  )
}

export default Collections
