import React from 'react'
import { BiPencil } from 'react-icons/bi'

interface Props { }

function Usercard(props: Props) {
  const { } = props

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <img src="https://github.com/mdo.png" alt="img" className='rounded-circle' width="200" />
            </div>
            <div className="col-md-6">
              <h2>User name</h2>
              <span>Add a bio <BiPencil /> </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">0 Followers</div>
            <div className="col-md-6">0 Following</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usercard
