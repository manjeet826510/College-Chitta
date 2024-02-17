import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar background h-nav-resp">
        <ul class="nav-list v-class-resp">
            <div class="logo"><img src="img/img.jpg" alt="logo"/></div>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#sevices">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div class="rightNav v-class-resp">
            <input type="text" name="search" id="search"/>
            <button class="btn btn-sm">Search</button>
        </div>
        <div class="burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </nav>
  )
}

export default Navbar