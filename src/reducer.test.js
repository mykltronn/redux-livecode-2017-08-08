import reducer, { initialState } from "./reducer";
import { addItem, updateQty, clearCart } from "./actions";

test("reducer should be able to add an item", function () {
  const state1 = reducer(initialState, addItem(1));
  expect(state1.cart).toEqual({1: 1});

  const state2 = reducer(state1, addItem(3));
  expect(state2.cart).toEqual({1: 1, 3: 1});
})

test("reducer should be able to update a quantity", function () {
  const state2 = reducer(initialState, updateQty({id: 1, qty: 3}));
  expect(state2.cart).toEqual({1: 3});
})

test("reducer should be able to clear cart", function () {
  const state1 = reducer(initialState, addItem(1));
  expect(state1.cart).toEqual({1: 1});

  const state2 = reducer(state1, clearCart());
  expect(state2.cart).toEqual({});
})
