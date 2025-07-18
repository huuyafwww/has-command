import { hasCommand } from './has-command';

describe('Positive', () => {
  it('For commands that exist', async () => {
    expect(await hasCommand('ls')).toBe(true);
  });
});

describe('Negative', () => {
  it('For commands that do not exist', async () => {
    expect(await hasCommand('nonexistent_command')).toBe(false);
  });
});
