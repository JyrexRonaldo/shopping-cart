import { render } from "@testing-library/react";
import CartItemCard from "./CartItemCard";
import { describe, it, expect } from "vitest";
import StoreContext from "../StoreContext/StoreContext";


describe("CartItemCard component", () => {
  it("it displays elements with props supplied", () => {
    const mockItemData = {
      imgURl: "image of item",
      title: "cool shirt",
      price: "429",
      quantity: 2,
      itemId: 1,
    };

    const contextData = {};

    const { container } = render(
      <StoreContext.Provider value={contextData}>
        <CartItemCard
          imgURL={mockItemData.imgURl}
          title={mockItemData.title}
          price={mockItemData.price}
          quantity={2}
          itemId={1}
        />
      </StoreContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
