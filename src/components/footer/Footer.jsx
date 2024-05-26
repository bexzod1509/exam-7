import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="b">
          <div>
            <img src={logo} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div>
            <h1>Follow Us</h1>
            <p>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </div>
          <div>
            <h1>Contact Us</h1>
            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="b1">
          <div>
            <h1>Infomation</h1>
            <p>About Us</p>
            <p>Infomation </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h1>Service</h1>
            <p>About Us</p>
            <p>Infomation </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h1>My Account</h1>
            <p>About Us</p>
            <p>Infomation </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h1>Our Offers</h1>
            <p>About Us</p>
            <p>Infomation </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="b2">
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <div className="b3">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
