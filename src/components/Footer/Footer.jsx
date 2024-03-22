import React from 'react'
import './footer.css'
import instagram from '../../assets/imgs/Instagram_logo_2016.svg.webp'
import linkedin from '../../assets/imgs/LinkedIn_icon.svg.png'

function Footer() {
  return (
    <>
      <footer className="footer p-10 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 social-links">
            <a><img src={linkedin} alt="" /></a>
            <a><img src={instagram} alt="" /></a>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer