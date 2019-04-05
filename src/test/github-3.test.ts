/**
 *  tests for https://github.com/cnojima/vscode-extension-readable-indent/issues/3
 */
import * as fs from 'fs';
import * as path from 'path';
import * as assert from 'assert';
import Indenter from '../Indenter';

const supportPath = path.resolve(__dirname, '../../src/test/support');

suite("Github Issue #3", function () {
  test('Github Issue 3 test', () => {
    const code = fs.readFileSync(path.resolve(supportPath, 'github-3-raw.txt'), 'utf-8');
    const expected = fs.readFileSync(path.resolve(supportPath, 'github-3-expected.txt'), 'utf-8');
    let foo;

    const ind = new Indenter();
    ind.alphabetize = true;
    foo = ind.indent(code);
    assert.equal(foo, expected);
  });
});