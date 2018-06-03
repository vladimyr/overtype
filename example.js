'use strict';

const pkg = require('./package.json');
const { bold, strikethrough, underline } = require('./');

// Run this file with: `node example.js | less`
console.log(`// Usage:
// --------------------------------------------------------------------

const { bold, strikethrough, underline } = require('${pkg.name}');

bold('bold BOLD\\tB O L D')          //=> ${bold('bold BOLD\tB O L D')}
underline('under\\tLINE')            //=> ${underline('under\tLINE')}
strikethrough('strike\\tTROUGH')      //=> ${strikethrough('strike\tTROUGH')}

underline(bold('bold&under\\tLINE')  //=> ${underline(bold('bold&under\tLINE'))}
bold(underline('bold&under\\tLINE')  //=> ${bold(underline('bold&under\tLINE'))}

// --------------------------------------------------------------------
// Press "q" to exit...`);
