import React from 'react'
import './Navbar.css'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'



function Navbar() {
  return (
    <nav className='navbar'>
      <h1>MovieLovers</h1>

      <div className="navbar_links">
        <a href="">Popular <img src={Fire} alt="fire"
        className="navbar_emoji" /></a>
        <a href="">Top Rated <img src={Star} alt="star"
        className="navbar_emoji" /></a>
        <a href="">Upcoming <img src={Party} alt="party"
        className="navbar_emoji" /></a>
      </div>
    </nav>
  )
}

export default Navbar
