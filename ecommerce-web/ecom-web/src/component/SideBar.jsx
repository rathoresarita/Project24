import React from 'react'
import '../css/sidebar.css'
import touch from '../assets/touch.svg';


const SideBar = () => {
  return (
    <div className='sidebar'>

<div className='logo'>
        <img src={touch} alt='Logo' />
      </div>
        <ul>
           
            <li>
                Home
            </li>

            <li>
                Cart
            </li>

            <li>
                Favourite
            </li>
            <li>
                Search
            </li>

            <li>
              CheckOut
            </li>
        </ul>




    </div>
  )
}

export default SideBar