import React from "react";
import ReactDOM from "react-dom/client";
//using React
const heading = React.createElement("h1", {}, "Namaste React 🧨");

const element = <span>This is React Element 🔥</span>;

//React Component
//class Based Component-old
//Functional Component-new
//this is also valid without return statement
const HedaingComponent2 = () => <div>This is a function component </div>;

//using JSX(React Element)
const jsxheading = (
  <h1 className="heading">
    {element}Namaste React 🧨 using JSX
    <HedaingComponent2 />
  </h1>
);
//component composition => Render one component in another
const HedaingComponent = () => {
  return (
    <div>
      <HedaingComponent2 />
      {jsxheading}
      <h1>This is a function component ✅ with return</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);
root.render(<HedaingComponent />);

// console.log(heading);
// console.log(jsxheading);
