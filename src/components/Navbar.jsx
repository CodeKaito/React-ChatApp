import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Teams Application</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>Jerome</span>
          <button>logout</button>
        </div>
      
    </div>
  )
}

export default Navbar