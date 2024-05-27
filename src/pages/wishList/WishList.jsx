import React from "react";
import "./WishList.css";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import Empty from "../empty/Empty";
function WishList() {
  let wishlist = useSelector((state) => state.heart.value);
  return (
    <div>
      <div style={wishlist.length ? {} : { display: "none" }} className="c">
        <p>
          <b>Home</b> / Wishlist
        </p>
      </div>
      <div style={wishlist.length ? {} : { display: "none" }} className="wish">
        <h1>Wishlist</h1>
      </div>
      {wishlist.length ? <Product data={wishlist} title={"none"} /> : <Empty />}
    </div>
  );
}

export default WishList;
