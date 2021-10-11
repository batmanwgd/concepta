```js
/* When file is named with "js"
this:
    import { saveAs } from 'file-saver';
has to change to:
    import pkg from 'file-saver';
    const { saveAs } = pkg;
and this has to be added to the package.json file:
    "type": "module"

otherwise, the file has to be named "cjs" as a "common js"
*/

// const Blob = require('cross-blob');
// new Blob([])
// //=> Blob {size: 0, type: ""}
// // Global patch (to support external modules like is-blob).
// globalThis.Blob = Blob

// The first method with JS
// import * as fspkg from 'file-saver';
// const { saveAs } = fspkg;
// The method with CJS
// const FileSaver = require('file-saver');
```