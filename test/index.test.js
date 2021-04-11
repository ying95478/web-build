const webBuild = require('..')

// TODO: Implement module test
test('web-build', () => {
  expect(webBuild('w')).toBe('w@zce.me')
  expect(webBuild('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => webBuild(100)).toThrow('Expected a string, got number')
})
