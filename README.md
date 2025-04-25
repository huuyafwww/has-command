# has-command

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Check if a binary exists in your system PATH.

## Features

- [x] Fully compatible with TypeScript.
- [x] Supports both ESM (ES Modules) and CommonJS module systems.

## Installation

Replace and execute the command according to the package manager you are using.
Here is an example of npm.

```sh
npm install --save-dev has-command
```

## Examples

### ES modules

```javascript
import { hasCommand } from 'has-command';

console.log(await hasCommand('cd')); // true
console.log(await hasCommand('nonexistent_command')); // false
```

### CommonJS

```javascript
const { hasCommand } = require('has-command');

console.log(await hasCommand('cd')); // true
console.log(await hasCommand('nonexistent_command')); // false
```

## License

[MIT](https://github.com/huuyafwww/has-command/blob/main/LICENSE)
