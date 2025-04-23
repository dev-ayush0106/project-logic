import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
        <div className="head">
          <div className="content">
            <div className="logo">
              <h1>Booking</h1>
            </div>
            <div className="button">
              <button className='btn'>Login</button><button className='btn'> SignUp</button>

            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
