import App from "./App";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
  it("it displays home page items", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
