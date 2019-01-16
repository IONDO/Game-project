describe("BouncingBox", function() {
  let box;

  beforeEach(() => {
    box = new BouncingBox();
    box.x = 50;
    box.y = 5;
    box.width = 100;
    box.height = 10;
  });

  it("should know its limits", () => {
    expect(box.minX()).toEqual(0);
    expect(box.maxX()).toEqual(100);
    expect(box.minY()).toEqual(0);
    expect(box.maxY()).toEqual(10);
  })

});
