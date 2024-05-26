import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
function Admin() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="admin">
        <h3>
          <b>Home</b> / Contact Us
        </h3>
        <h1>Admin</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <button
          onClick={() => {
            navigate("/");
            localStorage.removeItem("token");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Admin;
