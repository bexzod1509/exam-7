import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
const Bot_Token = "6877779800:AAHAPesR6iXzhC75G5VTwM1F0FhIVYTvYJw";
const Chat_Id = "-1002070275549";
let initialState = {
  fname: "",
  email: "",
  comment: "",
};
function Contact() {
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Bog'lanish %0A%0A";
    text += `To'liq Ismi: ${data.fname} %0A`;
    text += `Email: ${data.email} %0A`;
    text += `Qo'shimcha: ${data.comment}`;
    let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_Id}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setData(initialState);
    toast.success("We will definitely contact you");
  };
  return (
    <>
      <div className="c">
        <p>
          <b>Home</b> / Contact Us
        </p>
      </div>
      <div className="container">
        <div className="h">
          <div className="h1">
            <h1>Get in touch</h1>
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
          </div>
          <div className="h2">
            <form onSubmit={handleSubmit} action="">
              <p>Fullname</p>
              <input
                value={data.fname}
                onChange={(e) =>
                  setData((p) => ({ ...p, fname: e.target.value }))
                }
                required
                type="text"
                placeholder="James Doe"
              />
              <p>Email</p>
              <input
                value={data.email}
                onChange={(e) =>
                  setData((p) => ({ ...p, email: e.target.value }))
                }
                required
                type="email"
                placeholder="jamesdoe@gmail.com"
              />
              <p>Message</p>
              <textarea
                value={data.comment}
                onChange={(e) =>
                  setData((p) => ({ ...p, comment: e.target.value }))
                }
                required
                name=""
                id=""
                placeholder="Type your message"
              ></textarea>
              <button>Contact</button>
            </form>
          </div>
        </div>
      </div>
      <div className="f10">
        <input type="text" placeholder="Search query..." />
        <button>Search</button>
      </div>
    </>
  );
}

export default Contact;
