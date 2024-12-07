import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";
import { BrowserRouter } from "react-router-dom";

describe("ErrorPage component", () => {
  it("check whether the error page elements are rendered", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    const errorHeader = screen.getByRole("heading");
    const homePageLink = screen.getByRole("link")
    

    expect(errorHeader).toHaveTextContent("Oh no, this route doesn't exist!");
    expect(homePageLink).toHaveTextContent("You can go back to the home page by clicking here, though!");
  });


  it("check whether the error page link point to the right page", () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );

    const homePageLink = screen.getByRole("link")

    expect(homePageLink).toHaveAttribute("href", "/");
  });
});


