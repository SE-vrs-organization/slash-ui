import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router";
import RegisterPage from "./RegisterPage";

jest.mock("axios", () => ({
  get: jest.fn().mockResolvedValue({ data: [] }),
}));

test("should render", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
});

test("should have element with data-testid 'username'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const username = screen.getByTestId("username");
  expect(username).toBeInTheDocument();
});

test("should have element with data-testid 'firstName'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const firstName = screen.getByTestId("firstName");
  expect(firstName).toBeInTheDocument();
});

test("should have element with data-testid 'lastName'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const lastName = screen.getByTestId("lastName");
  expect(lastName).toBeInTheDocument();
});

test("should have element with data-testid 'email'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const email = screen.getByTestId("email");
  expect(email).toBeInTheDocument();
});

test("should have element with data-testid 'password'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const password = screen.getByTestId("password");
  expect(password).toBeInTheDocument();
});

test("should have element with data-testid 'confirmPassword'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const confirmPassword = screen.getByTestId("confirmPassword");
  expect(confirmPassword).toBeInTheDocument();
});

test("should have element with data-testid 'submit'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();
});

test("should not have home button with data-testid 'home-button'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const homeButton = screen.queryByTestId("home-button");
  expect(homeButton).not.toBeInTheDocument();
});

test("should not have search button with data-testid 'search-button'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const searchButton = screen.queryByTestId("search-button");
  expect(searchButton).not.toBeInTheDocument();
});

test("should not have wishlist button with data-testid 'wishlist-button'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const wishlistButton = screen.queryByTestId("wishlist-button");
  expect(wishlistButton).not.toBeInTheDocument();
});

test("should not have sell button with data-testid 'sell-button'", () => {
  render(
    <MemoryRouter>
      <RegisterPage />
    </MemoryRouter>
  );
  const sellButton = screen.queryByTestId("sell-button");
  expect(sellButton).not.toBeInTheDocument();
});
