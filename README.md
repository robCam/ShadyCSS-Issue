## ShadyCSS issue using style placeholders.

This is a reduced test case for the issue [#99](https://github.com/webcomponents/shadycss/issues/99) using style placeholders with [shadycss](https://github.com/webcomponents/shadycss) in Chrome version 49.0.2623.112 (64-bit).

### Installing

Run the following:

`$ npm install`

### Build

To generate a build including transpiled ES6 to ES5 using [Babel](https://babeljs.io/) run:

`$ npm run build`

### Reproduce the issue

To start a simple Python `SimpleHTTPServer` in the project directory run:

`$ npm run start`

Visit [localhost:8080](http://localhost:8080) in Chrome version 49.0.2623.112 (64-bit)

Alternatively, a hosted version of the build can be found [here](http://robcam.github.io/demos/shadycss-issue/)

### Expected result

Four `<my-element>` tags appear as large blue circles.

### Actual result in Chrome version 49.0.2623.112 (64-bit)

1. All `<my-element>` tags appear as small red squares.
2. Or intermittently, the first `<my-element>` tag appears as a small blue circle and the other three appear as small red squares.


