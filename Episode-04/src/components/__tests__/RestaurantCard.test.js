import { render, screen } from "@testing-library/react";
import RestAurentCard from "../RestAurentCard";
import MOCKDATA from "../../../restaurantList.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { withTopRatingLabel } from "../RestAurentCard";

const restaurant =
  MOCKDATA.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0];
test("should render restaurantCart component with props data", () => {
  //   console.log(
  //     MOCKDATA.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0],
  //   );
  render(
    <Provider store={appStore}>
      <RestAurentCard restData={restaurant} />,
    </Provider>,
  );

  const restName = screen.getByText("Hotel Anjani");

  expect(restName).toBeInTheDocument();
});
//Test case for higher order component

const RestCardPromoted = withTopRatingLabel(RestAurentCard);

test("should render RestaurantCard component with Top Rating label", () => {
  render(
    <Provider store={appStore}>
      <RestCardPromoted restData={restaurant} />
    </Provider>,
  );

  const label = screen.getByText(/Top Rated/);

  expect(label).toBeInTheDocument();
});
