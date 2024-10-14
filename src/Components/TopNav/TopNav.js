import React from 'react'
import './topNav.css'
import { signout } from '../../utils/icons'
import avatar from '../../img/avatar.png'
function TopNav() {
  return (
    <div className='TopNav'>
      <div className='rightSide'>
        <img src={avatar} alt="" className='avatar'/>
        <div className='text'>
            <h2>Hello, Tanvi</h2>
        </div>
        <div className='bottom-nav'>
            <li>{signout}Sign Out</li>
        </div>
      </div>
    </div>
  )
}

export default TopNav
