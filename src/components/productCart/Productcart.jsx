import React, { useState } from "react";
import "./Productcart.css";
import { removeFromCart } from "../../context/cartSlice";
import { decrementCart } from "../../context/cartSlice";
import { incrementCart } from "../../context/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import del from "../../assets/del.png";
import Checkout from "../Checkout/Checkout";
import { toast } from "react-toastify";
function Productcart() {
  const [show, setShow] = useState(false);
  let Cart = useSelector((state) => state.cart.value);
  let total = Cart?.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let dispatch = useDispatch();
  let cartProducts = Cart?.map((item) => (
    <div key={item.id} className="i2">
      <div className="i3">
        <button
          style={{ border: "none", background: "transparet" }}
          onClick={() => {
            dispatch(removeFromCart(item));
            toast.success("Deleted");
          }}
        >
          <img style={{ cursor: "pointer" }} src={del} alt="" />
        </button>
        <img
          style={{ width: "137px", height: "97px", objectFit: "contain" }}
          src={item.image}
          alt=""
        />
        <p>{item.title}</p>
      </div>
      <div className="i4">
        <p>${item.price * item.quantity}</p>
        <div className="i5">
          <button
            disabled={item.quantity <= 1}
            onClick={() => dispatch(decrementCart(item))}
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(incrementCart(item))}>+</button>
        </div>
        <p>${item.price}</p>
      </div>
    </div>
  ));
  return (
    <>
      <div className="c">
        <p>
          <b>Home</b> / <b>Hot Deal</b> / Nike Airmax 270 React
        </p>
      </div>
      <div className="container">
        <div className="i">
          <p>PRODUCT</p>
          <div className="i1">
            <p>PRICE</p>
            <p>QTY</p>
            <p>UNIT PRICE</p>
          </div>
        </div>
      </div>
      <div className="container">{cartProducts}</div>
      <div className="container">
        <div className="i10">
          <div className="i6">
            <input type="text" placeholder="Voucher code" />
            <button>Redeem</button>
          </div>
          <div className="i7">
            <div className="i8">
              <p>Subtotal</p>
              <p>${Math.round(total)}</p>
            </div>
            <div className="i8">
              <p>Shipping fee</p>
              <p>$20</p>
            </div>
            <div className="i8">
              <p>Coupon</p>
              <p>No</p>
            </div>
            <div className="i9">
              <h1>TOTAL</h1>
              <h1>${Math.round(total + 20)}</h1>
            </div>
            <button onClick={() => setShow(true)} className="i11">
              Check out
            </button>
          </div>
        </div>
      </div>
      {show ? <Checkout toggle={setShow} /> : <></>}
    </>
  );
}

export default Productcart;
