const vowelCount = require("./vowelCount");

test("vowelCount should return 5 for 'abracadabra", () => {
  expect(vowelCount("abracadabra")).toBe(5);
});
