import ShopPage from "./ShopPage";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

vi.mock("../ProductCard/ProductCard", () => {
  return {
    default: ({ imgURL, title, price, cardId }) => (
      <div data-testid="productCard">
        {JSON.stringify({ imgURL, title, price, cardId })}
      </div>
    ),
  };
});

vi.mock(import("react-router-dom"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useOutletContext: () => ({
      productsData: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
      ],
      error: false,
      loading: false,
    }),
  };
});

describe("ShopPage component", () => {
  it.only("displays child components", () => {
    const mockProductData = {
      imgURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      cardId: 1,
    };

    render(
      <BrowserRouter>
        <ShopPage />
      </BrowserRouter>
    );

    screen.debug();

    console.log(screen.getByTestId("productCard").textContent);

    expect(screen.getByTestId("productCard").textContent).toEqual(
      JSON.stringify(mockProductData));
  });
});
