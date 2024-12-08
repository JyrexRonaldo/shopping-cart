import ShopPage from "./ShopPage";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

vi.mock(import("react-router-dom"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    // your mocked methods

    useOutletContext: () => ({
      productsData: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
      ],
      error: false,
      loading: false,
    }),
  };
});

describe("ShopPage component", () => {
  it.only("displays element", () => {
    render(
      <BrowserRouter>
        <ShopPage />
      </BrowserRouter>
    );

    screen.debug();

    expect(screen.getByRole("presentation")).toHaveAttribute("src", "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" )



  });
});
