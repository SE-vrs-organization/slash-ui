import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router";
import AddPosting from "./AddPosting";

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: [] }),
}));

const callback = jest.fn();
// axios.get = jest.fn().mockResolvedValue({ data: [] });
test("should render", () => {
  render(
    <MemoryRouter>
      <AddPosting newPostingCallback={callback} />
    </MemoryRouter>
  );
});

test("should have element with data-testid 'name-input'", () => {
  render(
    <MemoryRouter>
      <AddPosting newPostingCallback={callback} />
    </MemoryRouter>
  );
  const homeButton = screen.getByTestId("name-input");
  expect(homeButton).toBeInTheDocument();
});

test("should have element with data-testid 'description-input'", () => {
  render(
    <MemoryRouter>
      <AddPosting newPostingCallback={callback} />
    </MemoryRouter>
  );
  const descriptionInput = screen.getByTestId("description-input");
  expect(descriptionInput).toBeInTheDocument();
});

test("should have element with data-testid 'price-input'", () => {
  render(
    <MemoryRouter>
      <AddPosting newPostingCallback={callback} />
    </MemoryRouter>
  );
  const priceInput = screen.getByTestId("price-input");
  expect(priceInput).toBeInTheDocument();
});

test("should have element with data-testid 'currency-input'", () => {
  render(
    <MemoryRouter>
      <AddPosting newPostingCallback={callback} />
    </MemoryRouter>
  );
  const currencyInput = screen.getByTestId("currency-input");
  expect(currencyInput).toBeInTheDocument();
});

test("should have element with data-testid 'submit-button'", () => {
  render(
    <MemoryRouter>
      <AddPosting newPostingCallback={callback} />
    </MemoryRouter>
  );
  const submitButton = screen.getByTestId("submit-button");
  expect(submitButton).toBeInTheDocument();
});
