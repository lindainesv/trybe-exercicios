const myRemove = require("./myRemove");

describe("testar a função myRemove", () => {
  it("retornar um array removendo o item correto", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])

  })
})

myRemove