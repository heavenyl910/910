import 'dotenv/config';
import prompts from 'prompts';
import qrcode from 'qrcode-terminal';
import { StringSession } from 'telegram/sessions';
import { TelegramClient } from 'telegram';
import { Logger } from 'telegram/extensions/Logger';

async function main(){
  const response = await prompts([
    { type:'text', name:'apiId', message:'API_ID', initial: process.env.API_ID || '' },
    { type:'text', name:'apiHash', message:'API_HASH', initial: process.env.API_HASH || '' },
    { type:'text', name:'phone', message:'Phone (+15551234567)', validate:v=>/^(\+?\d{8,})$/.test(v)||'invalid' }
  ]);
  const stringSession = new StringSession(process.env.STRING_SESSION || '');
  Logger.setLevel('none');
  const client = new TelegramClient(stringSession, Number(response.apiId), String(response.apiHash), { connectionRetries: 5 });
  await client.start({
    phoneNumber: async () => response.phone,
    phoneCode: async () => (await prompts({ type:'text', name:'code', message:'Code you received' })).code,
    onError: (e) => console.error(e),
    password: async () => (await prompts({ type:'password', name:'pwd', message:'2FA password (if any)' })).pwd
  });
  console.log('\nSigned in as:', (await client.getMe()).username || 'user');
  const sess = client.session.save();
  console.log('\nSTRING_SESSION=' + sess + '\n');
  console.log('QR login (open Telegram > Settings > Devices > Link Desktop Device):');
  qrcode.generate('tg://login?token=' + Buffer.from(sess).toString('base64url'), { small:true });
  await client.disconnect();
}
main().catch(e=>{ console.error(e); process.exit(1); });
