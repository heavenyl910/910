import 'dotenv/config';
const required = ['BOT_TOKEN','API_ID','API_HASH','STRING_SESSION'];
const missing = required.filter(k => !process.env[k]);
if (missing.length) { console.error('Missing env:', missing.join(', ')); process.exit(1); }
console.log('Env OK');
