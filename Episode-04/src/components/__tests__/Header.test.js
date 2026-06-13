const { render, screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../../__mocks__/mockRestList.json";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";

test("Should render heder component", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />
      </Provider>
      ,
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //   Assertion
  expect(loginButton).toBeInTheDocument();
});

test("should contain the cart item", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />
      </Provider>
      ,
    </BrowserRouter>,
  );
  const cartItem = screen.getByText("🛒 Cart(0 Item)");

  expect(cartItem).toBeInTheDocument();
});

//We use Regular Expression also
test("should contain the cart", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />
      </Provider>
      ,
    </BrowserRouter>,
  );

  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});

//onClick Button
test("should have logout after click", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />
      </Provider>
      ,
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

// test("should check the online status", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>,
//   );

//   expect(screen.getByText("🟢")).toBeInTheDocument();
// });

//Mock the hook

jest.mock("../../utils/useOnlineStatus", () => {
  return () => false;
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA.data);
    },
  });
});

test("should show the offline page", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider
          value={{
            loggedInUser: "Mahesh",
            setUserName: jest.fn(),
          }}
        >
          <Body />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>,
  );
  expect(await screen.findByText("You Are Offline")).toBeInTheDocument();
});
