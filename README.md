# set-environment

Simple node script to change between frontend environments

## Install

```sh
npm install set-environment

yarn add set-environment
```

## Usage

Add envs folder to your root project folder (side by side with your package.json),
then add your env files as you need e.g.
```bash
├── envs
│   ├── dev.json
│   ├── prod.json
│   ├── staging.json
│   └── test.json
```

then you need to add the env commands to your package.json scripts
(note that the argument passed should be the same file name in your envs file)
```json
"scripts": {
  "env:dev": "npm set-environment dev",
  "env:prod": "npm set-environment prod",
  "env:staging": "npm set-environment staging",
  "env:test": "npm set-environment test"
}
```

then, to change environments just:
```bash
npm env:dev
npm env:prod
npm env:staging
npm env:test
```
