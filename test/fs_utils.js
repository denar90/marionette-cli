'use strict';

const test = require('ava');
const path = require('path');
const fs = require('fs');
const fileName = path.join(process.cwd(), 'fixtures/package.json');
const fs_utils = require('../lib/utils/fs_utils');
const testData = {
  'mn-cli': {
    moduleType: 'es6',
    projectFolder: 'fixtures/app/components',
    builder: 'brunch'
  }
};

test.beforeEach(async t => {
  fs_utils.writeFile(fileName, {});
});

test('Write package.json file', async t => {
  t.is(await fs_utils.writeFile(fileName, testData), true);
});

test('Read package.json file', async t => {
  const config = await fs_utils.readFile(fileName);
  const isObject = (typeof config === 'object');
  t.truthy(isObject);
});

test('Apply config for package.json', async t => {
  await fs_utils.applyConfig(fileName);
  const config = await fs_utils.readFile(fileName);
  t.truthy(config.hasOwnProperty('mn-cli'));
});

test('Set config property for package.json', async t => {
  //@todo write test for setting property for global config
  await fs_utils.writeFile(fileName, testData);
  await fs_utils.setConfigProperty(fileName, 'moduleType', 'rjs');
  const config = await fs_utils.readFile(fileName);
  t.truthy(config.hasOwnProperty('mn-cli'));
  t.is(config['mn-cli']['moduleType'], 'rjs');
});

test('Get config property from package.json', async t => {
  //@todo write test for getting global config
  await fs_utils.writeFile(fileName, testData);
  const config = await fs_utils.getCliConfig(fileName);
  delete config.isLocal;
  t.deepEqual(config, testData['mn-cli']);
});

test('Generate file', async t => {
  //@todo write test for getting global config
  await fs_utils.writeFile(fileName, testData);
  const config = await fs_utils.getCliConfig(fileName);
  const fileSrc = path.join(__dirname, '../lib/generators', config.moduleType, 'layout.js');
  const generatedFile = path.join(process.cwd(), config.projectFolder, 'layout.js');
  await fs_utils.generateFile(fileSrc, generatedFile);
  fs.exists(generatedFile, (exists) => {
     t.truthy(exists);
  });
});

test.after(t => {
  fs_utils.writeFile(fileName, {});
});

