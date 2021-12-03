'use strict'

const app = require('./bin/express');
const variables = require('./bin/config/variables');

app.listen(variables.Api.port, () => {
  console.log(`Express.js development server started: http://localhost:${variables.Api.port}`);
});