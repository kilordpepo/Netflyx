import React from "react";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import configureStore from "./store";
import App from "./App";

afterEach(cleanup);

function renderWithRedux(ui, { initialState, store = configureStore() } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

test("Verify that rate an item works ", () => {
  const { getByTestId } = renderWithRedux(<App />);
  fireEvent.click(getByTestId("rate-1-1"));
  expect(getByTestId("rating-1").textContent).toBe("1");
  fireEvent.click(getByTestId("rate-5-3"));
  expect(getByTestId("rating-3").textContent).toBe("5");
});
