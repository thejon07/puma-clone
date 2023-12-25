import React, { useState } from 'react'
import puma from "../puma1.avif"
import "./home.css"
import Main from "./Main.jsx"

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  const toggle = () => {
    setShowMenu((prev) => !prev)
  }
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={puma} alt="" /></a>
          <div className='navItems'>
            <ul>
              <li id='search'><i class="fa-solid fa-magnifying-glass"></i>search</li>
              <li id='heart'><i class="fa-regular fa-heart"></i></li>
              <li id='heart'><i class="fa-solid fa-cart-shopping" style={{ color: "#ebebeb;" }}></i></li>
              <li id='heart' onClick={toggle}><i class="fa-solid fa-bars" style={{ color: "#e2e3e4;" }}></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`menu bg-dark ${showMenu ? 'show-menu' : ''}`}>
        <ul>
          <li>Menu</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Recent Parchase</li>
        </ul>
      </div>
      <Main />
    </div>
  )
}
