import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_RESTAURANT_LIST_DATA from "../../__mocks__/mockRestList.json";
import "@testing-library/jest-dom";
import Body from "../Body";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import RestAurentCard from "../RestAurentCard";
import FavoritesPage from "../FavoritesPage";

// console.log(
//   MOCK_RESTAURANT_LIST_DATA.data.cards[4].card.card.gridElements.infoWithStyle
//     .restaurants,
// );

const restaurantListProp =
  MOCK_RESTAURANT_LIST_DATA.data.cards[4].card.card.gridElements.infoWithStyle
    .restaurants[0];

const RestList = MOCK_RESTAURANT_LIST_DATA.data;

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestList);
    },
  });
});

test("Should render Body component", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider
          value={{ loggedInUser: "Mahesh", setUserName: jest.fn() }}
        >
          {/* <Body /> */}
          <FavoritesPage />
          <RestAurentCard restData={restaurantListProp} />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>,
  );

  const restName = await screen.findByText("Hotel Anjani");
  expect(restName).toBeInTheDocument();

  const favoriteBtn = screen.getByTestId("favoriteBtn");

  fireEvent.click(favoriteBtn);

  expect(screen.getByText("❤️")).toBeInTheDocument();

  fireEvent.click(screen.getByText("❤️"));

  expect(screen.getByText("♡")).toBeInTheDocument();

  fireEvent.click(screen.getByText("♡"));

  const removeButton = await screen.findByTestId("removeBtn");
  //   console.log(removeButton);

  fireEvent.click(removeButton);
  expect(
    screen.getByText("Start adding your favorite restaurants"),
  ).toBeInTheDocument();
});
