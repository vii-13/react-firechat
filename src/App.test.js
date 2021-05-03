import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders Sign in with Google", async () => {
  render(<App />);
  const linkElement = await waitFor(() =>
    screen.getByText(/Sing in with Google/i)
  );
  expect(linkElement).toBeInTheDocument();
});
