const shuffle = require("../src/shuffle");

console.log(shuffle);

describe("shuffle should...", () => {
  test("return an array", async () => {
    expect(copyArray([1,2,3], [0,0,0,4,5,6])).toBe([1,2,3,4,5,6]);
  });
});
