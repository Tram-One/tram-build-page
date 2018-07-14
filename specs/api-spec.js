const buildPage = require('../build-page')

describe('api', () => {
  describe('with test app and index.html', () => {
    describe('on home route', () => {
      const result = buildPage({
        appPath: './specs/app.js',
        route: '/',
        indexPath: './specs/index.html'
      })
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
