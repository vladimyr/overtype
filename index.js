'use strict';

const reLetter = /(\S)(?:[\b]\S)*/g;

const overtype = (str, cb) => (str || '').replace(reLetter, (match, char) => {
  return `${match}\b${cb(char) || char}`;
});

const bold = str => overtype(str, char => char);
const strikethrough = str => overtype(str, char => '-');
const underline = str => overtype(str, char => '_');

const stripFormatting = str => (str || '').replace(reLetter, (_, char) => char);

module.exports = {
  overtype,
  bold,
  strikethrough,
  underline,
  stripFormatting
};
