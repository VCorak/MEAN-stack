import { Animal } from './animal';

describe('Animal', () => {
  it('should create an instance', () => {
    expect(new Animal("", "", '0', "", "", "")).toBeTruthy();
  });
});
