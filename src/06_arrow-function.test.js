// 06: arrow functions

describe("06 Arrow functions", () => {
  it("Should bind the context to this", () => {
    const person = {
      age: 1,

      add: function(age) {
        // finish the implementation of the next function using an arrow function
        // so we can add some years to the current age and return the new age
        const f = years => this.age + years

        return f(age);
      }
    };
  });
});
