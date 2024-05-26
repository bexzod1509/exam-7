import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Single from "./pages/single/Single";
import Cart from "./pages/cart/Cart";
import WishLIst from "./pages/wishList/WishList";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<WishLIst />} />
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
