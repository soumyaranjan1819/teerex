import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-between mx-40 text-2xl font-semibold'>
        <Link to={'/'} >TeeRex</Link>
        <Link to={'/cart'} >Cart</Link>
    </div>
  )
}

export default Navbar