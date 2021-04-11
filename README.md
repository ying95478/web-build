# web-build

[![Build Status][actions-img]][actions-url]
[![Coverage Status][codecov-img]][codecov-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> a gulp auto build tools

## Installation

```shell
$ npm install web-build

# or yarn
$ yarn add web-build
```

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const webBuild = require('web-build')
const result = webBuild('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### webBuild(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Related

- [zce/caz](https://github.com/zce/caz) - A simple yet powerful template-based Scaffolding tools.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [chenguopeng](https://github.com/ying95478)



[actions-img]: https://img.shields.io/github/workflow/status/ying95478/web-build/CI
[actions-url]: https://github.com/ying95478/web-build/actions
[codecov-img]: https://img.shields.io/codecov/c/github/ying95478/web-build
[codecov-url]: https://codecov.io/gh/ying95478/web-build
[license-img]: https://img.shields.io/github/license/ying95478/web-build
[license-url]: https://github.com/ying95478/web-build/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/web-build
[downloads-url]: https://npm.im/web-build
[version-img]: https://img.shields.io/npm/v/web-build
[version-url]: https://npm.im/web-build
[dependency-img]: https://img.shields.io/david/ying95478/web-build
[dependency-url]: https://david-dm.org/ying95478/web-build
[devdependency-img]: https://img.shields.io/david/dev/ying95478/web-build
[devdependency-url]: https://david-dm.org/ying95478/web-build?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
