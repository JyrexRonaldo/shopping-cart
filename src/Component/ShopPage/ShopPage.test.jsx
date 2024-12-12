import ShopPage from "./ShopPage";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import StoreDataContext from "../StoreDataContext/StoreDataContext";

vi.mock("../ProductCard/ProductCard", () => {
  return {
    default: ({ imgURL, title, price, cardId }) => (
      <div data-testid="productCard">
        {JSON.stringify({ imgURL, title, price, cardId })}
      </div>
    ),
  };
});

describe("ShopPage component", () => {
  it("displays child components", () => {
    const mockProductData = {
      imgURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      cardId: 1,
    };

    const contextData = ({
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
    })

    render(
      <BrowserRouter>
        <StoreDataContext.Provider value={contextData}>
          <ShopPage />
        </StoreDataContext.Provider>
      </BrowserRouter>
    );


    expect(screen.getByTestId("productCard").textContent).toEqual(
      JSON.stringify(mockProductData)
    );
  });

  it("display loading screen when data is unavailable", () => {
    const contextData = ({
      productsData: null,
      error: false,
      loading: true,
    })

    render(
      <BrowserRouter>
        <StoreDataContext.Provider value={contextData}>
          <ShopPage />
        </StoreDataContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByRole("paragraph").textContent).toEqual("Loading...")
  })


  it("display error message when data fetch fails", () => {
    const contextData = ({
      productsData: null,
      error: true,
      loading: false,
    })

    render(
      <BrowserRouter>
        <StoreDataContext.Provider value={contextData}>
          <ShopPage />
        </StoreDataContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByRole("paragraph").textContent).toEqual("A network error was encountered")
  })
});
