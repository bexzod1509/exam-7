import React from "react";
import { useSelector } from "react-redux";
import Productcart from "../../components/productCart/Productcart";
import Empty from "../../pages/empty/Empty";
function Cart() {
  const cart = useSelector((state) => state.cart.value);
  return <>{cart.length ? <Productcart /> : <Empty />}</>;
}

export default Cart;
