import { describe, expect, it } from "vitest";
import CartPage from "./CartPage";
import { render, screen } from "@testing-library/react";
import StoreDataContext from "../StoreDataContext/StoreDataContext";

describe("CartPage component", () => {
  it("displays elements as expected", () => {
    const testProductData = {};

    const { container } = render(
      <StoreDataContext.Provider value={testProductData}>
        <CartPage />
      </StoreDataContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("displays cart items total price when data is available", () => {
    const productsData = [
      
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
    
    ];

    const cartItems = {
      1: 1,
    };

    const testProductData = {productsData, cartItems};

    render(
      <StoreDataContext.Provider value={testProductData}>
        <CartPage />
      </StoreDataContext.Provider>
    );

    const paragraghs = screen.getAllByRole('paragraph')

    expect((paragraghs[paragraghs.length - 1]).textContent).toBe("Grand Total: $109.95")
  });
});
