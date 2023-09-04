import React from 'react'
import './Navbar.css'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'
import DarkMode from '../DarkMode/DarkMode'

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>MovieLovers</h1>
      <DarkMode />
      <div className="navbar_links">
        <a href="#popular">Popular <img src={Fire} alt="fire"
        className="navbar_emoji" /></a>
        <a href="#top_rated">Top Rated <img src={Star} alt="star"
        className="navbar_emoji" /></a>
        <a href="#upcoming">Upcoming <img src={Party} alt="party"
        className="navbar_emoji" /></a>
      </div>
    </nav>
  )
}

export default Navbar
