const childProcess = require('child_process')

describe('cli', () => {
  describe('with test app and index.html', () => {
    describe('on home route', () => {
      const result = childProcess.execSync(`./tram-build-page.js -a ./specs/app.js -r '/' -i ./specs/index.html -w`)
      it('should have index.html content', () => {
        expect(result).toContain('<html>')
        expect(result).toContain('<head>')
        expect(result).toContain('<meta data="test-index">')
      })
      it('should have route content', () => {
        expect(result).toContain('HOME ROUTE')
      })
    })
  })
})
