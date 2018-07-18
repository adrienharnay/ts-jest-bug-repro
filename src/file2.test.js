import { func } from './file2';

describe('file', () => {
  test('func', () => {
    expect(func()).toBe(undefined);
  });
});
