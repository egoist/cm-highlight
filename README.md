# cm-highlight

[![NPM version](https://img.shields.io/npm/v/cm-highlight.svg?style=flat)](https://npmjs.com/package/cm-highlight) [![NPM downloads](https://img.shields.io/npm/dm/cm-highlight.svg?style=flat)](https://npmjs.com/package/cm-highlight) [![Build Status](https://img.shields.io/circleci/project/egoist/cm-highlight/master.svg?style=flat)](https://circleci.com/gh/egoist/cm-highlight) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

This requires `codemirror` to be a peer dependency.

```bash
yarn add codemirror cm-highlight
```

## Usage

```js
import 'codemirror/mode/javascript/javascript'
import highlight from 'cm-highlight'

const code = `const foo = () => {
  console.log('foo')
}`

const html = highlight(code, { mode: 'javascript' })
//=> <span class="cm-keyword">...</span>
```

Then just place `html` into an element like `<pre class="cm-s-default"><code>${html}</code></pre>`, you can replace `default` with the codemirror theme name you actually use.

## API

### highlight(code, [options])

#### options

##### mode

Type: `string`

The mode to use (must be loaded as normal)

##### tabSize

Type: `Number`<br>
Default: `2`

Replace tab with this amount of spaces.

## Todos

- [ ] Support line numbers.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**cm-highlight** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/cm-highlight/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
