require('dotenv').config();
const readline = require('readline');
const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = q => new Promise(res => rl.question(q, a => res(a.trim())));

(async () => {
  const apiId = Number(process.env.API_ID);
  const apiHash = process.env.API_HASH;

  const client = new TelegramClient(new StringSession(''), apiId, apiHash, { connectionRetries: 5 });

  const phone = await ask('Phone number (e.g. +15551234567): ');
  await client.start({
    phoneNumber: () => Promise.resolve(phone),
    password: () => ask('2FA password (if any, else Enter): '),
    phoneCode: () => ask('Code you received: '),
    onError: console.error,
  });

  console.log('\nSTRING_SESSION=' + client.session.save() + '\n');
  rl.close();
  process.exit(0);
})();
