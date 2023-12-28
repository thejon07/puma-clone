import React from 'react'
import fashion1 from "./fashion1.webp"
import "./shopping.css"

export default function Shopping() {
  return (
  <>
    <div className='shopping-item'>
      <img src={fashion1} alt="" />
      <p>$200</p>
      <button>check details</button>
    </div>
  </>
  )
}
