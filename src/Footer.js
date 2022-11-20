import React from 'react'
import {FaHeart} from 'react-icons/fa'
import './Header.css'
const Footer = () => {
  let date=new Date();

  return (
    <footer>
        <h1>CopyRight &copy; {date.getFullYear()}</h1>
        <h1>Made With <FaHeart/></h1>
    </footer>
  )
}

export default Footer