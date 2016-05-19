# FitSize.js [![Build Status](https://travis-ci.org/uupaa/FitSize.js.svg)](https://travis-ci.org/uupaa/FitSize.js)

[![npm](https://nodei.co/npm/uupaa.fitsize.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.fitsize.js/)

Calculate to fit the screen size and keep aspect ratio.

This module made of [WebModule](https://github.com/uupaa/WebModule).

## Documentation
- [Spec](https://github.com/uupaa/FitSize.js/wiki/)
- [API Spec](https://github.com/uupaa/FitSize.js/wiki/FitSize)

## Browser, NW.js and Electron

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/FitSize.js"></script>
<script>

FitSize.calc(500, 600, 350, 400)   // -> { r: 1.428, w: 500, h: 571 }
FitSize.calc(1920, 1080, 320, 480) // -> { r: 2.25,  w: 720, h: 1080 }

</script>
```

## WebWorkers

```js
importScripts("<module-dir>/lib/WebModule.js");
importScripts("<module-dir>/lib/FitSize.js");

```

## Node.js

```js
require("<module-dir>/lib/WebModule.js");
require("<module-dir>/lib/FitSize.js");

```

