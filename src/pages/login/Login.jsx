import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { toast } from "react-toastify";
function Login() {
  let navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    let user = {
      username: username.current.value,
      password: password.current.value,
    };
    axios
      .post("https://fakestoreapi.com/auth/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success("Welcome");
        navigate("/admin");
      })
      .catch(() => {
        toast.error("Username or Password is incorrect");
      });
  };
  let username = useRef("johnd");
  let password = useRef("m38rmF$");
  return (
    <div className="container">
      <div className="c">
        <p>
          <b>Home</b> / Contact Us
        </p>
        <form onSubmit={submit} action="">
          <h4>Username</h4>
          <input defaultValue={"johnd"} ref={username} required type="text" />
          <h4>Password</h4>
          <input
            defaultValue={"m38rmF$"}
            ref={password}
            required
            type="password"
            name=""
            id=""
          />
          <button>LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
