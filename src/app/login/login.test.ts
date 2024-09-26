import { beforeEach, describe, expect, test } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import LoginPage from "./page";

beforeEach(() => {
  cleanup();
});

describe("Login page test", () => {
  test("Login page should have username input", () => {
    render(LoginPage());
    expect(screen.getByRole("username").getAttribute("placeholder")).toBe(
      "Username"
    );
  });
  test("Login page should have password input", () => {
    render(LoginPage());
    expect(screen.getByRole("password").getAttribute("placeholder")).toBe(
      "Password"
    );
  });
  test("Login page should have login button", () => {
    render(LoginPage());
    expect(screen.getByRole("login").textContent).toBe("Sign in");
  });
});
