<p align="center"><a href="http://tram-one.io/" target="_blank"><img src="https://raw.githubusercontent.com/Tram-One/tram-logo/master/v3/tram.svg?sanitize=true" height="128"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/tram-build-page"><img src="https://img.shields.io/npm/dm/tram-build-page.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/tram-build-page"><img src="https://img.shields.io/npm/v/tram-build-page.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/tram-build-page"><img src="https://img.shields.io/npm/l/tram-build-page.svg" alt="License"></a>
</p>

# Tram-Build-Page

CLI and JS tool for building a single page off of a tram-one web application

This tool is useful if you want to pre-render a route on your `index.html`.
This way, if javascript has been disabled, you can still have some default content.

Ideally you would use this script in a post-build step to modify your distributable's `index.html`.

## Install
```
npm install tram-build-page
```

## CLI Usage
For the CLI you can use `-o` to write to a specific file, or `-w` to write out to the console (and then pipe into another command).

```
tram-build-page -a './main.js' -r '/' -i './public/index.html' -o './dist/index.html'
```

### CLI Options
```
Options:

    -a, --app-path <value>    Tram-One Application Path (should call .start)
    -r, --route <value>       Route to render on the Page
    -i, --index-path <value>  Relative Path to index.html file
    -h, --mock-host <value>   [optional] Mock Host to use in the url (defaults to http://localhost/)
    -o, --out-path <value>    [optional] Path to save new index.html
    -w, --write               [optional] Write out result to console
    -h, --help                output usage information
```

## API Usuage
For the API the function returns the new `index.html` as a string. You can of course still
use the `outPath` or `write` options to mimic the CLI functionality.
```js
const buildPage = require('tram-build-page')
const newIndexPage = buildPage({
  appPath: './main.js',
  route: '/hello',
  indexPath: './public/index.html'
})
```
