# import-inspector

> Wrap dynamic imports with information about the import itself

```js
import {wrap, inspect} from 'import-inspector';

const promise = wrap(import('./other-module'), {
  whatever: 42,
});

// Continue to use the promise exactly as before
promise.then(module => {
  // ...
});

// But get information back out
let metadata = inspect(loader);
// {
//   whatever: 42
// }
```
