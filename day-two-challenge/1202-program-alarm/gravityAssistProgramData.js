const { map } = require('ramda');
const fs = require('fs');
const path = require('path');
const text = path.join(__dirname, 'gravity-assist-program.txt');
const numAsStringArray = fs.readFileSync(text).toString('utf-8').split(',');
const gravityAssistProgramArray = (map(parseInt, numAsStringArray));

module.exports = gravityAssistProgramArray;