# has-bin

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Features

- [x] Fully compatible with TypeScript.
- [x] Supports both ESM (ES Modules) and CommonJS module systems.

## Installation

Replace and execute the command according to the package manager you are using.
Here is an example of npm.

```sh
npm install --save-dev has-bin
```

## Examples

### ES modules

```javascript
import { hasBin } from 'has-bin';

console.log(await hasBin('cd')); // true
console.log(await hasBin('nonexistent_command')); // false
```

### CommonJS

```javascript
const { hasBin } = require('has-bin');

console.log(await hasBin('cd')); // true
console.log(await hasBin('nonexistent_command')); // false
```

## License

[MIT](https://github.com/huuyafwww/has-bin/blob/main/LICENSE)
