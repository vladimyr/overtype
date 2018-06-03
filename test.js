'use strict';

const { bold, strikethrough, underline, stripFormatting } = require('./');
const test = require('tape');

const str = 'NAME';

test('basic formatting', t => {
  t.plan(3);
  t.equal(bold(str), 'N\bNA\bAM\bME\bE', 'correct bold output');
  t.equal(strikethrough(str), 'N\b-A\b-M\b-E\b-', 'correct strikethrough output');
  t.equal(underline(str), 'N\b_A\b_M\b_E\b_', 'correct underline output');
});

test('complex formatting', t => {
  t.plan(2);
  t.equal(underline(bold(str)), 'N\bN\b_A\bA\b_M\bM\b_E\bE\b_', '`bold |> underline`');
  t.equal(bold(underline(str)), 'N\b_\bNA\b_\bAM\b_\bME\b_\bE', '`underline |> bold`');
});

test('strip formatting', t => {
  t.plan(3);
  t.equal(stripFormatting(underline(bold(str))), str, 'clears `bold |> underline`');
  t.equal(stripFormatting(bold(underline(str))), str, 'clears `underline |> bold`');
  t.equal(stripFormatting(bold(bold(str))), str, 'clears `bold |> bold`');
});

test('input handling', t => {
  t.equal(bold('  NAM E   '), '  N\bNA\bAM\bM E\bE   ', 'preserves whitespace');
  t.equal(bold(''), '', 'handles empty input');
  t.equal(bold(null), '', 'handles `null` gracefully');
  t.equal(bold(), '', 'handles `undefined` gracefully');
  t.end();
});
