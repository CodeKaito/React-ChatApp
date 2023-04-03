import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Teams Application</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>Jerome</span>
          <button onClick={() => signOut(auth)}>logout</button>
        </div>
      
    </div>
  )
}

export default Navbar