import { hasBin } from './has-bin';

describe('Positive', () => {
  it('For commands that exist', async () => {
    expect(await hasBin('cd')).toBe(true);
  });
});

describe('Negative', () => {
  it('For commands that do not exist', async () => {
    expect(await hasBin('nonexistent_command')).toBe(false);
  });
});
