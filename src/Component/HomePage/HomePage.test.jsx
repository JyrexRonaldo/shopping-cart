import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("HomePage component", () => {
  it("check whether elements are rendered", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    screen.getByText("Shop");
    screen.getByText("Suburban");

    screen.getByRole("button", { name: "Shop Now" });
  });

  it("check whether the button points to the right page", () => {
    render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );

      expect(screen.getByRole("link", { name: "Shop Now" })).toHaveAttribute("href", "/shop");

  })
});


