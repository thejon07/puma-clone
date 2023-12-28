import React, { useState } from 'react'
import puma from "../puma1.avif"
import "./home.css"
import Main from "./Main.jsx"
import useSearchbar from './useSearchbar.jsx';

export default function Home() {
  const {showMenu:menu, toggle:toggle1} = useSearchbar();
  const {showMenu:search, toggle:toggle2} = useSearchbar();
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={puma} alt="" /></a>
          <div className='navItems'>
            <ul>
              <li id='search'  className={`search bg-dark ${search ? 'search-display' : ''}`} onClick={toggle2}><i class="fa-solid fa-magnifying-glass"></i>search</li>
              <li id='heart' className='search'><i class="fa-regular fa-heart"></i></li>
              <li id='heart' className='search'><i class="fa-solid fa-cart-shopping" style={{ color: "#ebebeb;" }}></i></li>
              <li id='heart' onClick={toggle1}><i class="fa-solid fa-bars" style={{ color: "#e2e3e4;" }}></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {search && (
        <div className='sear '>
        <input type="text" placeholder='search' className='searchInput' />
        <i onClick={toggle2} class="fa-solid fa-magnifying-glass"></i>
        </div>
      )}
      <div className='section'>
      <div className={`menu bg-dark ${menu ? 'show-menu' : ''}`}>
        <ul>
          <li>Menu</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Recent Parchase</li>
        </ul>
      </div>

      </div>
      <Main />
    </div>
  )
}
