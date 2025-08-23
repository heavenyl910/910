const fs = require('fs');
const path = require('path');

function loadCredentials(filePath = path.join(__dirname, '..', 'Credentials.env')) {
  if (!fs.existsSync(filePath)) return {};
  const data = {};
  const content = fs.readFileSync(filePath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (match) {
      const key = match[1];
      const value = match[2];
      data[key] = value;
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  }
  return data;
}

module.exports = { loadCredentials };
