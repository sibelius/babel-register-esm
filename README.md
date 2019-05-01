# babel-register + ESM

This repo is to demonstrate how to use ESM to resolve `module` field instead of `main` on package.json

related to this issue: https://github.com/standard-things/esm/issues/794

## How to test it

node babelx.js ./packages/main/src/index.js

it will throw this error:

 Error: Cannot find module '@test/shared'. Please verify that the package.json has a valid "main" entry
    at Object.<anonymous> (/babel-register-esm/packages/main/src/index.js:3:38)
    
## How to make it work

Go to packages/shared and transpile it

```
yarn workspace @test/shared build
```

try to run babelx.js again, it will output:

```
shared
done
```

