import { render, screen } from "@testing-library/react";
import ChartPage from "../pages/ChartPage";

test("renders ChartPage component", () => {
  render(<ChartPage />);
  const chartElement = screen.queryByTestId("chart-page");
  expect(chartElement).toBeTruthy();
});
