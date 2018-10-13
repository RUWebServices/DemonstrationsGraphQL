const input = require('./input');
const mutation = require('./mutations');
const types = require('./types');
const queries = require('./queries');

module.exports = `
    ${input}
    ${queries}
    ${mutation}
    ${types}
`;
