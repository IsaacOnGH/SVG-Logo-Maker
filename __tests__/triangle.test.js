const Triangle = require("../shapes/triangle");

describe("Triangle", () => {
describe("render", () => {
    it("should return a string", () => {
    const triangle = new Triangle("ABC", "red", "blue");
    const result = triangle.render();
    expect(typeof result).toBe("string");
    });
}
);
}
);
