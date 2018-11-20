const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/ng-el/runtime.js',
    './dist/ng-el/polyfills.js',
    './dist/ng-el/scripts.js',
    './dist/ng-el/main.js',
  ];
  await fs.ensureDir('elements');
  await concat(files, 'elements/framework-poll.js');
  await fs.copyFile('./dist/ng-el/styles.css', 'elements/styles.css');
  await fs.copy('./dist/ng-el/assets/', 'elements/assets/');
})();
