import { App } from "./app"

describe('This is Test Suite For App Component', () => {
  it('This should verify add function', () => {
    const app = new App();
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(2, -3)).toBe(-1);
    expect(app.add(-2, -3)).toBe(-5);
    expect(app.add(-2, 3)).toBe(1);
  })
})
