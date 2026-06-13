import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import CartPage from "../CartPage";
import MOCK_MENU_DATA from "../../__mocks__/mockRestMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU_DATA);
    },
  });
});

test("should render the RestaurantMenu component", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <CartPage />
      </Provider>
    </BrowserRouter>,
  );
  //   screen.debug();

  const accordionHeader = await screen.findByRole("heading", {
    name: /South Indian/i,
  });

  //   expect(accordionHeader).toBeInTheDocument();

  fireEvent.click(accordionHeader);

  const addButton = await screen.findAllByRole("button", { name: "ADD" });

  //   console.log(addButton.length);

  expect(await screen.findByText("🛒 Cart(0 Item)")).toBeInTheDocument();

  fireEvent.click(addButton[0]);

  const cartItem = await screen.findByText("🛒 Cart(1 Item)");

  expect(cartItem).toBeInTheDocument();

  fireEvent.click(addButton[1]);
  expect(await screen.findByText("🛒 Cart(2 Item)")).toBeInTheDocument();

  const addedCartItem = await screen.findAllByTestId("cartItem");

  expect(addedCartItem.length).toBe(2);

  const removeButton = await screen.findAllByRole("button", { name: "Remove" });
  // console.log(removeButton.length);

  fireEvent.click(removeButton[0]);

  expect((await screen.findAllByTestId("cartItem")).length).toBe(1);
  const clearButton = await screen.findByRole("button", { name: "Clear Cart" });
  //   console.log(clearButton);

  fireEvent.click(clearButton);

  expect(
    await screen.findByText("Cart is Empty add some item to the cart!"),
  ).toBeInTheDocument();
});
