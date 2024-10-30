import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router";
import SearchProducts from "./SearchProduct";

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: [] }),
}));

const callback = jest.fn();
// axios.get = jest.fn().mockResolvedValue({ data: [] });
test("should render", () => {
  render(
    <MemoryRouter>
      <SearchProducts />
    </MemoryRouter>
  );
});

test("should have element with data-testid 'product-input'", () => {
  render(
    <MemoryRouter>
      <SearchProducts />
    </MemoryRouter>
  );
  const productInput = screen.getByTestId("product-input");
  expect(productInput).toBeInTheDocument();
});

test("should have element with data-testid 'currency-input'", () => {
  render(
    <MemoryRouter>
      <SearchProducts />
    </MemoryRouter>
  );
  const currencyInput = screen.getByTestId("currency-input");
  expect(currencyInput).toBeInTheDocument();
});

test("should have element with data-testid 'minprice-input'", () => {
  render(
    <MemoryRouter>
      <SearchProducts />
    </MemoryRouter>
  );
  const minPriceInput = screen.getByTestId("minprice-input");
  expect(minPriceInput).toBeInTheDocument();
});

test("should have element with data-testid 'maxprice-input'", () => {
  render(
    <MemoryRouter>
      <SearchProducts />
    </MemoryRouter>
  );
  const maxPriceInput = screen.getByTestId("maxprice-input");
  expect(maxPriceInput).toBeInTheDocument();
});

test("should have element with data-testid 'search-button'", () => {
  render(
    <MemoryRouter>
      <SearchProducts />
    </MemoryRouter>
  );
  const searchButton = screen.getByTestId("search-button");
  expect(searchButton).toBeInTheDocument();
});
