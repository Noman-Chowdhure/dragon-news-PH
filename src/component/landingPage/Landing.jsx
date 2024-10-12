import React from 'react'
import Header from '../shared/Header'
import Navbar from '../shared/Navbar'
import Leftside from '../shared/LeftSideNav/Leftside'
import RightSide from '../shared/RightSideNav/RightSide'

const Landing = () => {
  return (
    <div className=' w-11/12 m-auto'>
        <Header></Header>
        <Navbar></Navbar>
        <h1 className=' font-roboto text-9xl'>hello world</h1>
        <div className=" grid grid-cols-4 justify-center justify-items-center gap-10">
            <div><Leftside></Leftside></div>
            <div className=' col-span-2'>news comming soon</div>
            <div><RightSide></RightSide></div>
        </div>
    </div>
  )
}

export default Landing