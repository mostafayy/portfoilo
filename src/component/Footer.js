import React from "react"
import logo1 from "./pic/my.jpg"
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img className='imgo' src={logo1} alt='' />
          </div>
          <p>© 2022. All rights reserved by Mostafa yahya.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer