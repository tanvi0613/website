import React from 'react'
import { menuItems } from '../../utils/MenuItems'
import './navigation.css'
import logo from '../../img/logo.png'

function Navigation({active, setActive}) {
  return (
    <div className='Navigation'>
      <img src={logo} alt="logo" id="logo"/>
      <div className='.user-con'>
        <div className='text'>
            <h2>Tanvi</h2>
            <p>Your Money</p>
        </div>
      </div>
      <ul className='menu-items'>
        {menuItems.map((item) => {
            return <li 
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active===item.id ? 'active' : ''}
            >
                {item.icon}
                <span>{item.title}</span>
                </li>
        })}
      </ul>
    </div>
  )
}

export default Navigation
