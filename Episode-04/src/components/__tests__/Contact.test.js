import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//For Grouping we use describe
describe("Contact us page test cases", () => {
  //We can use test or it
  it("Should loads contact us component", () => {
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    // assertion

    expect(heading).toBeInTheDocument();
  });

  test("should component has a button", () => {
    render(<Contact />);

    //Querying
    //   const button = screen.getByText("submit");
    //OR
    const button = screen.getByRole("button");
    //   console.log(button);

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("should component  conation inputBox", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputBoxes).toBeInTheDocument();
  });

  test("should component  conation inputBox", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    //   expect(inputBoxes.length).toBe(2);

    expect(inputBoxes.length).not.toBe(3);
  });
});
