import React from "react";
import "./Navbar.css";
import down from "../../assets/down.png";
import cart from "../../assets/Cart.png";
import user from "../../assets/account.png";
import logo from "../../assets/logo.png";
import wish from "../../assets/wish.png";
import search from "../../assets/search.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  let wishlist = useSelector((state) => state.heart.value);
  let token = localStorage.getItem("token");
  return (
    <>
      <div className="container">
        <div className="a">
          <div className="a4">
            <div className="a1">
              <p>EN</p>
              <img src={down} alt="" />
            </div>
            <div className="a1">
              <p>USD</p>
              <img src={down} alt="" />
            </div>
          </div>
          <div>
            <div className="a2">
              <NavLink to={`/${token ? "admin" : "register"}`}>
                <img src={user} alt="" />
              </NavLink>
              <NavLink to={"/wish"}>
                <img src={wish} alt="" />
                <p>{wishlist.length}</p>
              </NavLink>
              <NavLink to={"/cart"}>
                <img src={cart} alt="" />
                <p>0</p>
              </NavLink>
              <h3>items</h3>
              <div className="a3">
                <h4>$0.00</h4>
                <img src={search} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <nav className="a5">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
            <div className="a6">
              <NavLink to={"/"}>HOME</NavLink>
              <NavLink to={"/"}>BAGS</NavLink>
              <NavLink to={"/"}>SNEAKERS</NavLink>
              <NavLink to={"/"}>BELT</NavLink>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
