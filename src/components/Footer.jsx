import React from 'react';
import {
  FaHome, FaInfo, FaList, FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube,
  FaEnvelope, FaPaypal, FaPinterestP, FaPhone
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer(props) {
  return (
    <div className="bg-black text-white">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-4 col-sm-2">
            <NavLink className="nav-link p-1" to='/home'>
              <FaHome />
            </NavLink>
            <NavLink className="nav-link p-1" to='/list'>
              <FaList />
            </NavLink>
            <NavLink className="nav-link p-1" to='/about'>
              <FaInfo />
            </NavLink>
            {/* <ul className="list-unstyled">
              <li><Link to='/home'>
                <span className="fa fa-home fa-lg"></span>
              </Link></li>
              <li><Link to='/aboutus'>About Us</Link></li>
              <li><Link to='/menu'>Menu</Link></li>
              <li><Link to='/contactus'>Contact Us</Link></li>
            </ul> */}
          </div>
          <div className="col-7 col-sm-5">
            <h5>Contact</h5>
            <address>1234 example address<br />
              <FaPhone /> : phone #<br />
              <FaEnvelope /> : <a href="mailto:example@email">example@email</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <h5>Links</h5>
            <div className="text-center">
              <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                <FaInstagram style={{ color: "white" }} />
              </a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                <FaTwitter style={{ color: "white" }} />
              </a>
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                <FaFacebookF style={{ color: "white" }} />
              </a>
              <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/">
                <FaYoutube style={{ color: "white" }} />
              </a>
              <a className="btn btn-social-icon btn-pinterest" href="http://pinterest.com/">
                <FaPinterestP style={{ color: "white" }} />
              </a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
                <FaLinkedinIn style={{ color: "white" }} />
              </a>
              <a className="btn btn-social-icon" href="https://www.paypal.com/">
                <FaPaypal style={{ color: "white" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;