const https = require('https');
https.get('https://navora-private-limited.vercel.app/admin', {
  headers: { 'Cookie': 'admin_auth=true' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data.includes('ERROR'));
    console.log(data.match(/ERROR \d+/));
  });
});
