import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { describe, it, expect } from "vitest";
import StoreDataContext from "../StoreDataContext/StoreDataContext";
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
      <StoreDataContext.Provider value={contextData}>
        <ProductCard
          imgURL={mockItemData.imgURl}
          title={mockItemData.title}
          price={mockItemData.price}
          cardId={mockItemData.card}
        />
      </StoreDataContext.Provider>
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
      <StoreDataContext.Provider value={contextData}>
        <ProductCard
          imgURL={mockItemData.imgURl}
          title={mockItemData.title}
          price={mockItemData.price}
          cardId={mockItemData.card}
        />
      </StoreDataContext.Provider>
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
      <StoreDataContext.Provider value={contextData}>
        <ProductCard
          imgURL={mockItemData.imgURl}
          title={mockItemData.title}
          price={mockItemData.price}
          cardId={mockItemData.card}
        />
      </StoreDataContext.Provider>
    );

    const quantityInput = screen.getByRole("spinbutton");

    expect(quantityInput).toHaveValue(1);
  });
});
