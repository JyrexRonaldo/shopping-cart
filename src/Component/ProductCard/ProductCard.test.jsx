import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { describe, it, expect } from "vitest";
import StoreContext from "../StoreContext/StoreContext";
import userEvent from "@testing-library/user-event";

describe("ProductCard component", () => {
  it("it displays elements with props supplied", () => {
    const mockItemData = {
      imgURl: "image of item",
      title: "cool shirt",
      price: "429",
      card: 5,
    };

    const contextData = {};

    const { container } = render(
      <StoreContext.Provider value={contextData}>
        <ProductCard
          imgURL={mockItemData.imgURl}
          title={mockItemData.title}
          price={mockItemData.price}
          cardId={mockItemData.card}
        />
      </StoreContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("updates quantity input display after interaction", async () => {
    const user = userEvent.setup();

    const mockItemData = {
      imgURl: "image of item",
      title: "cool shirt",
      price: "429",
      card: 5,
    };

    const contextData = {};

    render(
      <StoreContext.Provider value={contextData}>
        <ProductCard
          imgURL={mockItemData.imgURl}
          title={mockItemData.title}
          price={mockItemData.price}
          cardId={mockItemData.card}
        />
      </StoreContext.Provider>
    );

    const quantityInput = screen.getByRole("spinbutton");

    await user.clear(quantityInput);
    await user.type(quantityInput, "5000");

    expect(quantityInput).toHaveValue(5000);
  });

  it("does not updates quantity input display after no interaction", () => {
    const mockItemData = {
      imgURl: "image of item",
      title: "cool shirt",
      price: "429",
      card: 5,
    };

    const contextData = {};

    render(
      <StoreContext.Provider value={contextData}>
        <ProductCard
          imgURL={mockItemData.imgURl}
          title={mockItemData.title}
          price={mockItemData.price}
          cardId={mockItemData.card}
        />
      </StoreContext.Provider>
    );

    const quantityInput = screen.getByRole("spinbutton");

    expect(quantityInput).toHaveValue(1);
  });
});
