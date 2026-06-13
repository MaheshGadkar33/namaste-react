import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

test("Should toggle the theme", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  //mock
  const lightModeButton = screen.getByRole("button", { name: "Light Mode" });
  //   console.log(lightModeButton);
  fireEvent.click(lightModeButton);
  expect(screen.getByRole("button", { name: "Dark Mode" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Dark Mode" }));
  expect(
    screen.getByRole("button", { name: "Light Mode" }),
  ).toBeInTheDocument();
});
