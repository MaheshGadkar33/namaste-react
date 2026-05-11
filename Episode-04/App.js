import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data.json";

const styleCard = {
  backgroundColor: "skyBlue",
};

console.log(data);

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20250910/ourmid/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.webp"
          alt=""
        />
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

const RestAurentCard = ({ restData }) => {
  console.log(restData.card.card.info.name);
  const { name, cuisines, avgRating, sla } = restData?.card.card.info;
  return (
    <div className="restCard">
      <img
        className="restLogo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restData.card.card.info.cloudinaryImageId}`}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>deliveryTime : {sla.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="search" style={styleCard}>
        Search
      </div>
      <div className="restaurantContainer">
        {data.map((restaurant, id) => (
          <RestAurentCard key={id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);
root.render(<AppLayout />);

// console.log(heading);
// console.log(jsxheading);
