const config = require('./babel.config');

require('@babel/register')({
  ...config,
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
});

require = require('esm')(module, {
  mainFields: [
    'module',
    'main'
 ],
  force: true,
});

require(process.argv[2]);
