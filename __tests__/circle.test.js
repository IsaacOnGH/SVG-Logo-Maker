const Circle = require("../shapes/circle");

describe("Circle", () => {
  describe("render", () => {
    it("should return a string", () => {
      const circle = new Circle("ABC", "red", "blue");
      const result = circle.render();
      expect(typeof result).toBe("string");
    });
  }
  );
}
);

