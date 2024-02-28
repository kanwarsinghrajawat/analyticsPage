import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";

test("renders button with correct text", () => {
  render(<Button label="Click me" />);
  const buttonElement = screen.getByText(/Click me/i) as HTMLElement;
  expect(buttonElement).toBeInTheDocument();
});
