import highlight from '../src'
import 'codemirror/mode/javascript/javascript'

test('main', () => {
  const html = highlight('const a = 1', { mode: 'javascript' })
  expect(html).toBe(`<span class="cm-keyword">const</span> <span class="cm-def">a</span> <span class="cm-operator">=</span> <span class="cm-number">1</span>`)
})
