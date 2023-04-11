const spinWords = require("./spinWords");

test("spinWords returns 'Just gniddik ereht is llits one more'", () => {
  expect(spinWords("Just kidding there is still one more")).toBe(
    "Just gniddik ereht is llits one more"
  );
});
