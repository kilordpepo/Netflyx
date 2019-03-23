import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "react-testing-library";
import configureStore from "./store";
import SongsList from "./components/list";

afterEach(cleanup);

function renderWithRedux(ui, { initialState, store = configureStore() } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

test("Verify that rate an item works ", () => {
  const { getByTestId, getByText } = renderWithRedux(<SongsList />);
  fireEvent.click(getByTestId("rate-1-1"));
  expect(getByTestId("rate-1").textContent).toBe("5");
});
