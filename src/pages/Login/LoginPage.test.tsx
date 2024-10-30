import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router";
import LoginPage from "./LoginPage";

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: [] }),
}));

const callback = jest.fn();
// axios.get = jest.fn().mockResolvedValue({ data: [] });
test("should render", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
});

test("should have element with data-testid 'username-input'", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const username = screen.getByTestId("username-input");
  expect(username).toBeInTheDocument();
});

test("should have element with data-testid 'password-input'", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const password = screen.getByTestId("password-input");
  expect(password).toBeInTheDocument();
});

test("should have element with data-testid 'login-button'", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const loginButton = screen.getByTestId("login-button");
  expect(loginButton).toBeInTheDocument();
});

test("should not have home button with data-testid 'home-button'", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const homeButton = screen.queryByTestId("home-button");
  expect(homeButton).not.toBeInTheDocument();
});

test("should not have search button with data-testid 'search-button'", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const searchButton = screen.queryByTestId("search-button");
  expect(searchButton).not.toBeInTheDocument();
});

test("should not have wishlist button with data-testid 'wishlist-button'", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const wishlistButton = screen.queryByTestId("wishlist-button");
  expect(wishlistButton).not.toBeInTheDocument();
});

test("should not have sell button with data-testid 'sell-button'", () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
  const sellButton = screen.queryByTestId("sell-button");
  expect(sellButton).not.toBeInTheDocument();
});
