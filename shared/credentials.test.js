const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { loadCredentials } = require('./credentials');

test('loadCredentials parses file and sets env', () => {
  const tmpFile = path.join(os.tmpdir(), 'creds.env');
  fs.writeFileSync(tmpFile, 'API_ID=123\nBOT_TOKEN=abc\n');
  const prev = { API_ID: process.env.API_ID, BOT_TOKEN: process.env.BOT_TOKEN };
  const data = loadCredentials(tmpFile);
  assert.equal(data.API_ID, '123');
  assert.equal(data.BOT_TOKEN, 'abc');
  assert.equal(process.env.API_ID, '123');
  assert.equal(process.env.BOT_TOKEN, 'abc');
  // cleanup
  if (prev.API_ID === undefined) delete process.env.API_ID; else process.env.API_ID = prev.API_ID;
  if (prev.BOT_TOKEN === undefined) delete process.env.BOT_TOKEN; else process.env.BOT_TOKEN = prev.BOT_TOKEN;
  fs.unlinkSync(tmpFile);
});
