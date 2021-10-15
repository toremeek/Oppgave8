import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders add jsx text", () => {
  render(<App />);
  const paragraph = screen.getByText("Oblig om testing");
  expect(paragraph).toBeInTheDocument();
});
