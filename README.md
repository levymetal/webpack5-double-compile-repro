# Webpack 5 double-compile repro

After `watchOptions.aggregateTimeout` was lowered to 20ms in https://github.com/webpack/webpack/pull/15041, VSCode will often double-compile when saving a file on 2018-2022 Macs running Monterey 12.2. This has not been tested on other operating systems or other versions of MacOS.

## Reproducing the issue

1. Clone the repo

```
git clone git@github.com:levymetal/webpack5-double-compile-repro.git
cd webpack5-double-compile-repro
```

2. Install packages

```
yarn install
```

4. Start the server

```
yarn start
```

5. Open `index.js` in VSCode and save the file. Observe that the build is often compiled twice.
