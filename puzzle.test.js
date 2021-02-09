const calculateRoute = require("./puzzle");

test("L2,L2,L2 - 2 blocks away", () => {
  expect(calculateRoute("L2, L2, L2")).toBe(2);
});

test("L2, L2, L2, L2 - baclk to start position", () => {
  expect(calculateRoute("L2, L2, L2, L2")).toBe(0);
});

test("R2, L3 - 5 blocks away", () => {
  expect(calculateRoute("R2, L3")).toBe(5);
});

test("R5, L5, R5, R3​ - 12 blocks away", () => {
  expect(calculateRoute("R5, L5, R5, R3​")).toBe(12);
});
