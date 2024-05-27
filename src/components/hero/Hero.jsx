import React from "react";
import "./Hero.css";
import shoe from "../../assets/shoe.png";
import shoemini from "../../assets/shoemini.png";
import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
import rate from "../../assets/rate.png";
function Hero() {
  return (
    <div className="container">
      <div className="f">
        <div>
          <h1>Adidas Men Running Sneakers</h1>
          <p>Performance and design. Taken right to the edge.</p>
          <h3>SHOP NOW</h3>
        </div>
        <img src={shoe} alt="" />
      </div>
      <div className="f1">
        <div className="f2">
          <img src={category1} alt="" />
          <h1>FREE SHIPPING</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="f2">
          <img src={category2} alt="" />
          <h1>100% REFUND</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="f2">
          <img src={category3} alt="" />
          <h1>SUPPORT 24/7</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="f3">
        <h2>LATEST NEWS</h2>
        <div className="f4">
          <div className="f5">
            <img src={new1} alt="" />
            <div>
              <p>01 Jan, 2015</p>
              <h1>Fashion Industry</h1>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h4>
            </div>
          </div>
          <div className="f5">
            <img src={new2} alt="" />
            <div>
              <p>01 Jan, 2015</p>
              <h1>Best Design Tools</h1>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h4>
            </div>
          </div>
          <div className="f5">
            <img src={new3} alt="" />
            <div>
              <p>01 Jan, 2015</p>
              <h1>HR Community</h1>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="f3">
        <h2>FEATURED PRODUCTS</h2>
        <div className="f7">
          <div className="f8">
            <img src={shoemini} alt="" />
            <div>
              <h1>Blue Swade Nike Sneakers</h1>
              <img src={rate} alt="" />
              <div className="f9">
                <p>$499</p>
                <h4>$599</h4>
              </div>
            </div>
          </div>
          <div className="f8">
            <img src={shoemini} alt="" />
            <div>
              <h1>Blue Swade Nike Sneakers</h1>
              <img src={rate} alt="" />
              <div className="f9">
                <p>$499</p>
                <h4>$599</h4>
              </div>
            </div>
          </div>
          <div className="f8">
            <img src={shoemini} alt="" />
            <div>
              <h1>Blue Swade Nike Sneakers</h1>
              <img src={rate} alt="" />
              <div className="f9">
                <p>$499</p>
                <h4>$599</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f10">
        <input type="text" placeholder="Search query..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Hero;
