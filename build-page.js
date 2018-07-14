const assert = require('assert')
const fs = require('fs')
const path = require('path')
const domino = require('domino')

module.exports = (options) => {
  const {appPath, route, indexPath, mockHost, outPath, write} = options

  assert.ok(appPath !== undefined, 'Application Path should be defined')
  assert.ok(route !== undefined, 'Route should be defined.')
  assert.ok(indexPath !== undefined, 'Index Path should be defined.')

  // build url (and remove any duplicate slashes)
  const mockUrl = mockHost ? `${mockHost}/${route}` : `http://localhost/${route}`
  const extraSlashes = /([^:])([/]{2,})/g
  const cleanUrl = mockUrl.replace(extraSlashes, '/')

  // setup window

  const indexFile = fs.readFileSync(path.join(__dirname, indexPath)).toString()
  window = domino.createWindow(indexFile, cleanUrl)
  document = window.document

  // load Tram-One App
  require(appPath)

  // write out file
  if (outPath) fs.writeFileSync(path.join(__dirname, outPath), window.document.outerHTML)
  if (write) console.log(window.document.outerHTML)
  return window.document.outerHTML
}

