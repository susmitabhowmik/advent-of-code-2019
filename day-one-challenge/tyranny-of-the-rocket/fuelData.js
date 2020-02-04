const { map } = require('ramda');
const fs = require('fs');
const path = require('path');
const text = path.join(__dirname, 'module-mass.txt');
const numAsStringArray = fs.readFileSync(path.join(text)).toString('utf-8').split("\n");
const massArray = (map(parseInt, numAsStringArray));

module.exports = massArray;