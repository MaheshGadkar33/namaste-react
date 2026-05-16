import { LOGO_URL } from "../utils/constats";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
