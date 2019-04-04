/**
 *  tests for https://github.com/cnojima/vscode-extension-readable-indent/issues/3
 */
import * as assert from 'assert';
import Indenter from '../Indenter';
import * as vscode from 'vscode';

const fs = require('fs');
const path = require('path');

const supportPath = path.resolve(__dirname, '../../src/test/support');

suite("Github Issue #4", function () {
  const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('readableIndent');

  test('Github Issue 4 test :: left-justified', () => {
    const code = fs.readFileSync(path.resolve(supportPath, 'github-4-raw.txt'), 'utf-8');
    const expected = fs.readFileSync(path.resolve(supportPath, 'github-4-expected.txt'), 'utf-8');
    let foo;

    const ind = new Indenter(code);
		ind.alphabetize = false;
    foo = ind.indent();
    foo = ind.indent();
    assert.equal(foo, expected);
  });

  test('Github Issue 4.1 test :: center-justified', () => {
    const code = fs.readFileSync(path.resolve(supportPath, 'github-4.1-raw.txt'), 'utf-8');
    const expected = fs.readFileSync(path.resolve(supportPath, 'github-4.1-expected.txt'), 'utf-8');
    let foo;

		const ind = new Indenter(code);
		ind.alphabetize = false;
    ind.centerJustify = true;
    foo = ind.indent();
    assert.equal(foo, expected);
  });
});