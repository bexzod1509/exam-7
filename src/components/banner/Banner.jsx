import React from "react";
import "./Banner.css";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
function Banner() {
  return (
    <>
      <div className="d">
        <div className="container">
          <h1>Super Flash Sale 50% Off</h1>
        </div>
      </div>
      <div className="container">
        <div className="d1">
          <div className="d2">
            <h1>FS - QUILTED MAXI CROSS BAG</h1>
            <img src={product1} alt="" />
            <div className="d3">
              <h4>$299,43</h4>
              <p>$534,33</p>
              <span>24% Off</span>
            </div>
          </div>
          <div className="d2">
            <h1>FS - Nike Air Max 270 React...</h1>
            <img src={product2} alt="" />
            <div className="d3">
              <h4>$299,43</h4>
              <p>$534,33</p>
              <span>24% Off</span>
            </div>
          </div>
          <div className="d2">
            <h1>FS - Nike Air Max 270 React...</h1>
            <img src={product3} alt="" />
            <div className="d3">
              <h4>$299,43</h4>
              <p>$534,33</p>
              <span>24% Off</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d4">
          <h1>BEST SELLER</h1>
          <div className="d5">
            <p>All</p>
            <p>Bags</p>
            <p>Sneakers</p>
            <p>Belt</p>
            <p>Sunglasses</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
