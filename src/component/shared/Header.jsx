import React from 'react'
import logo from '../../img/logo.png'
import moment from 'moment';
const Header = () => {
  return (
    <div className=' w-full h-fit grid justify-center py-10 justify-items-center'>
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className=' text-xl'>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  )
}

export default Header