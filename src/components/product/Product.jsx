import React from "react";
import "./Product.css";
import rate from "../../assets/rate.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleHeart } from "../../context/heartSlice";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../context/cartSlice";
import { BsCartCheckFill } from "react-icons/bs";
function Product({ data, title, loading, setCount, count }) {
  let Cart = useSelector((state) => state.cart.value);
  let wishList = useSelector((state) => state.heart.value);
  let dispatch = useDispatch();
  let products = data?.map((el) => (
    <div key={el.id} className="e1">
      <NavLink to={`/product/${el.id}`}>
        <img
          style={{ width: "290px", height: "280px", objectFit: "contain" }}
          src={el.image}
          alt=""
        />
      </NavLink>
      <div className="e2">
        <button onClick={() => dispatch(toggleHeart(el))}>
          {wishList?.some((item) => item.id === el.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button onClick={() => dispatch(addToCart(el))}>
          {Cart?.some((item) => item.id === el.id) ? (
            <BsCartCheckFill />
          ) : (
            <MdOutlineShoppingCart />
          )}
        </button>
      </div>
      <h1>{el.title}</h1>
      <img src={rate} alt="" />
      <div className="e3">
        <p>${el.price - 2}</p>
        <h4>${el.price}</h4>
        <span>24% Off</span>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="e">
        <div className={loading ? "loading" : "hide"}>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
          <div>
            <div className="sk1"></div>
            <div className="sk2"></div>
            <div className="sk3"></div>
            <div className="sk3"></div>
            <div className="sk4"></div>
          </div>
        </div>
        {products}
      </div>
      <div style={{ display: `${title}` }} className="e4">
        <button disabled={count == 20} onClick={() => setCount((p) => p + 4)}>
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default Product;
