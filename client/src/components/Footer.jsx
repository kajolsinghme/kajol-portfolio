import React from 'react'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <div className='footer'>
        <div className='container footer_container d-flex justify-content-around flex-wrap'>
          <div className='first mt-5'>
            <h4>Kajol Singh</h4>
            <p>&#169; {year} Kajol Singh All rights reserved </p>
            <p className='d-flex'>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook mx-3"></i>
            </p>
          </div>
          <div className='second mt-5'>
            <h4>Get in Touch</h4>
            <p>For questions or collaboration in the web development realm, feel free to reach out:</p>
            <p><a href="mailto:kajolsingh@gmail.com" className='text-decoration-none' style={{color:'white'}}>kajolsingh985@gmail.com</a></p>
            <p>+91 7668462359</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p> <a href="https://drive.google.com/file/d/1zqscwa-ss_zMrn3DJ3eJJGpo_REq1zd6/view?usp=drive_link" target='_blank' rel="noreferrer" className='text-decoration-none' style={{color:'white'}}>Resume</a></p>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer