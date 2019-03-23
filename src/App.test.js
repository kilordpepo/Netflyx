import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "react-testing-library";
import configureStore from "./store";
import SongsList from "./components/list";
afterEach(cleanup);

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
function renderWithRedux(ui, { initialState, store = configureStore() } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("can render with redux with defaults", () => {
  const { getByTestId, getByText } = renderWithRedux(<SongsList />);
  fireEvent.click(getByText("+"));
  expect(getByTestId("count-value").textContent).toBe("1");
});
