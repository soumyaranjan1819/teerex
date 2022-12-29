import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-between bg-slate-500 px-28 py-3 text-white'>
        <Link to={'/'} className='text-4xl font-semibold' >TeeRex</Link>
        <Link to={'/cart'} >Cart</Link>
    </div>
  )
}

export default Navbar