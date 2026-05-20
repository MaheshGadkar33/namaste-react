import { useState } from "react";
import { LOGO_URL } from "../utils/constats";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("whole Header page is render ");
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="navContainer">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
