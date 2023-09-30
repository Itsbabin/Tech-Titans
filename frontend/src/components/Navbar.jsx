import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
       <Link className='link' to='/'> <div className="logo">this is logo</div> </Link>
        <Link className='link' to='/singin'><div className="singin">Singin</div> </Link>
    </div>
  )
}
