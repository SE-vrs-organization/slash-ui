import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navigation from "./Navigation";
import { MemoryRouter } from "react-router";

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: [] }),
}));
// axios.get = jest.fn().mockResolvedValue({ data: [] });
test("should render", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
});

test("should have home button with data-testid 'home-button'", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const homeButton = screen.getByTestId("home-button");
  expect(homeButton).toBeInTheDocument();
});

test("should have search button with data-testid 'search-button'", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const searchButton = screen.getByTestId("search-button");
  expect(searchButton).toBeInTheDocument();
});

test("should have wishlist button with data-testid 'wishlist-button'", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const wishlistButton = screen.getByTestId("wishlist-button");
  expect(wishlistButton).toBeInTheDocument();
});

test("should have sell button with data-testid 'sell-button'", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const sellButton = screen.getByTestId("sell-button");
  expect(sellButton).toBeInTheDocument();
});

test("should not have element with data-testid 'username-input'", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const username = screen.queryByTestId("username-input");
  expect(username).not.toBeInTheDocument();
});

test("should not have element with data-testid 'password-input'", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const password = screen.queryByTestId("password-input");
  expect(password).not.toBeInTheDocument();
});

test("should not have element with data-testid 'login-button'", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const loginButton = screen.queryByTestId("login-button");
  expect(loginButton).not.toBeInTheDocument();
});
