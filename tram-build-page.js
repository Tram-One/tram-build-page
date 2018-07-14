#!/usr/bin/env node

const options = require('commander')
const buildPage = require('./build-page')

options
  .option('-a, --app-path <value>', 'Tram-One Application Path (should call .start)')
  .option('-r, --route <value>', 'Route to render on the Page')
  .option('-i, --index-path <value>', 'Relative Path to index.html file')
  .option('-h, --mock-host <value>', '[optional] Mock Host to use in the url (defaults to http://localhost/)')
  .option('-o, --out-path <value>', '[optional] Path to save new index.html')
  .option('-w, --write', '[optional] Write out result to console')
  .parse(process.argv)

buildPage(options)
