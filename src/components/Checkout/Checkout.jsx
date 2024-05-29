import React, { useState } from "react";
import "./Checkout.css";
import arrowleft from "../../assets/arrowleft.png";
import { deleteAllCart } from "../../context/cartSlice";
import { useDispatch } from "react-redux";
import exit from "../../assets/exit.png";
import checked from "../../assets/checked.png";
import check from "../../assets/check.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import { toast } from "react-toastify";
const Bot_Token = "6877779800:AAHAPesR6iXzhC75G5VTwM1F0FhIVYTvYJw";
const Chat_Id = "-1002070275549";
let initialState = {
  fname: "",
  lname: "",
  address: "",
  email: "",
  phone: "",
};
function Checkout({ toggle }) {
  let dispatch = useDispatch();
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Order %0A%0A";
    text += `Name: ${data.fname} %0A`;
    text += `Last Name: ${data.lname} %0A`;
    text += `Address: ${data.address} %0A`;
    text += `Email: ${data.email} %0A`;
    text += `Phone: ${data.phone} %0A`;
    let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_Id}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setData(initialState);
    toggle(false);
    dispatch(deleteAllCart());
    toast.success("Thank you for your purchase");
  };
  return (
    <>
      <div onClick={() => toggle(false)} className="j"></div>
      <div className="j1">
        <div className="j2">
          <button onClick={() => toggle(false)}>
            <img src={arrowleft} alt="" />
          </button>
          <button onClick={() => toggle(false)}>
            <img src={exit} alt="" />
          </button>
        </div>
        <h1>Make Payment</h1>
        <form onSubmit={handleSubmit}>
          <div className="j3">
            <div className="j7">
              <input
                value={data.fname}
                onChange={(e) =>
                  setData((p) => ({ ...p, fname: e.target.value }))
                }
                type="text"
                required
                placeholder="First Name"
              />
              <input
                value={data.email}
                onChange={(e) =>
                  setData((p) => ({ ...p, email: e.target.value }))
                }
                type="email"
                required
                placeholder="Email Address"
              />
              <h2>Select Method of Payment</h2>
              <div className="j4">
                <div className="j5">
                  <img src={card1} alt="" />
                  <p>Credit Card Or Debit</p>
                </div>
                <img src={checked} alt="" />
              </div>
              <div className="j4">
                <div className="j5">
                  <img src={card2} alt="" />
                  <p>Paypal</p>
                </div>
                <img src={check} alt="" />
              </div>
              <div className="j4">
                <div className="j5">
                  <img src={card3} alt="" />
                  <p>Bank Transfer</p>
                </div>
                <img src={check} alt="" />
              </div>
            </div>
            <div>
              <input
                value={data.lname}
                onChange={(e) =>
                  setData((p) => ({ ...p, lname: e.target.value }))
                }
                className="j6"
                type="text"
                required
                placeholder="Last Name"
              />
              <input
                value={data.address}
                onChange={(e) =>
                  setData((p) => ({ ...p, address: e.target.value }))
                }
                type="text"
                required
                name=""
                id="j6"
                placeholder="Address for Delivery"
              />
              <input
                value={data.phone}
                onChange={(e) =>
                  setData((p) => ({ ...p, phone: e.target.value }))
                }
                className="j6"
                type="tel"
                required
                placeholder="Mobile Phone "
              />
            </div>
          </div>
          <div className="j8">
            <button type="submit">Go to Payment</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;
