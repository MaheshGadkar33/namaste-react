import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constats";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onLineStatus = useOnlineStatus();
  // console.log("onLineStatus 🛜 ", onLineStatus);
  // console.log("whole Header page is render ");
  useEffect(() => {
    // console.log("useEffect is called");
  }, []);
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="navContainer">
        <ul>
          <li>Online status: {onLineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
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
