import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../__mocks__/mockRestList.json";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA.data);
    },
  });
});

it("should render the Body component after search", async () => {
  await act(async () =>
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
        ,
      </BrowserRouter>,
    ),
  );

  const searchButton = screen.getByRole("button", { name: "Search" });

  //   console.log(searchButton);

  expect(searchButton).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");
  //   console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "hotel" } });

  fireEvent.click(searchButton);

  const restCard = screen.getAllByTestId("restCard");

  expect(restCard.length).toBe(2);
});

test("should return the card after the top rated click", async () => {
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

  const restCardBefore = await screen.findAllByTestId("restCard");
  expect(restCardBefore.length).toBe(20); // whatever your expected count is

  const topRatedButton = await screen.findByRole("button", {
    name: "⭐ Top Rated",
  });
  //   console.log(topRatedButton);
  fireEvent.click(topRatedButton);
  const restCardAfter = await screen.findAllByTestId("restCard");
  //   console.log(restCardAfter.length);
  expect(restCardAfter.length).toBe(10); // whatever your expected count is
});

it("should change the user name in header component", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider
          value={{
            loggedInUser: "Mahesh",
            setUserName: jest.fn(),
          }}
        >
          <Header />
          <Body />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>,
  );

  const userInputName = await screen.findByTestId("userInput");
  // console.log(userName);
  fireEvent.change(userInputName, { target: { value: "Mahesh Gadkar" } });

  expect(await screen.findByText(/Mahesh/)).toBeInTheDocument();
});
